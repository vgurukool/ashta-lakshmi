import os
import json
import sqlite3
from pathlib import Path
from typing import List, Optional, Dict, Any
from fastapi import FastAPI, HTTPException, Header, Depends
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(
    title="Ashta Lakshmi — Vedic Wealth Assessment API",
    description="FastAPI Backend & Sovereign Telemetry Engine for Ashta Lakshmi Holistic Vedic Wealth Evaluation Platform",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

BASE_DIR = Path(__file__).resolve().parent.parent
DIST_DIR = BASE_DIR / "dist"
DB_PATH = Path(__file__).resolve().parent / "ashta_lakshmi_ledger.db"

# Initialize SQLite database schema
def init_db():
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS user_assessments (
        user_id VARCHAR(64) NOT NULL,
        year VARCHAR(4) NOT NULL,
        lakshmi_id VARCHAR(16) NOT NULL,
        self_score INTEGER,
        automated_score INTEGER,
        score_source VARCHAR(16),
        questions_json TEXT,
        action_items_json TEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (user_id, year, lakshmi_id)
    );
    """)
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS empirical_telemetry (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id VARCHAR(64) NOT NULL,
        domain VARCHAR(16) NOT NULL,
        source VARCHAR(64) NOT NULL,
        score INTEGER NOT NULL,
        metrics_json TEXT,
        received_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    """)
    conn.commit()
    conn.close()

init_db()

# Pydantic schemas
class MetricItem(BaseModel):
    key: Optional[str] = None
    value: Optional[Any] = None
    status: Optional[str] = None

class IngestTelemetryPayload(BaseModel):
    domain: str
    source: str
    score: int
    user_id: Optional[str] = "demo_arjun"
    metrics: Optional[List[Dict[str, Any]]] = None
    timestamp: Optional[str] = None

class AssessmentPayload(BaseModel):
    user_id: str
    year: str
    assessments: Dict[str, Any]

@app.get("/api/health")
def health_check():
    return {
        "status": "healthy",
        "service": "Ashta Lakshmi Vedic Wealth Platform",
        "engine": "Harmonic Assessment & Recalibration Engine v2.0",
        "framework": "FastAPI",
        "port": 3000
    }

# Telemetry Webhook Ingestion API
@app.post("/api/v1/scores/ingest")
def ingest_telemetry(payload: IngestTelemetryPayload, authorization: Optional[str] = Header(None)):
    user_id = payload.user_id or "demo_arjun"
    metrics_str = json.dumps(payload.metrics or [])
    
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("""
        INSERT INTO empirical_telemetry (user_id, domain, source, score, metrics_json)
        VALUES (?, ?, ?, ?, ?)
    """, (user_id, payload.domain.lower(), payload.source, payload.score, metrics_str))
    conn.commit()
    conn.close()

    return {
        "status": "success",
        "message": f"Ingested telemetry for {payload.domain} ({payload.score}%)",
        "domain": payload.domain,
        "score": payload.score,
        "source": payload.source,
        "user_id": user_id
    }

# Get latest telemetry feeds for user
@app.get("/api/v1/telemetry/{user_id}")
def get_user_telemetry(user_id: str):
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("""
        SELECT domain, source, score, metrics_json, received_at
        FROM empirical_telemetry
        WHERE user_id = ?
        ORDER BY received_at DESC
    """, (user_id,))
    rows = cursor.fetchall()
    conn.close()

    latest_by_domain = {}
    for r in rows:
        dom = r[0]
        if dom not in latest_by_domain:
            latest_by_domain[dom] = {
                "domain": dom,
                "source": r[1],
                "score": r[2],
                "metrics": json.loads(r[3] or "[]"),
                "received_at": r[4]
            }

    return {
        "user_id": user_id,
        "telemetry": latest_by_domain
    }

# Get user assessments
@app.get("/api/v1/assessments/{user_id}/{year}")
def get_assessments(user_id: str, year: str):
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    cursor.execute("""
        SELECT lakshmi_id, self_score, automated_score, score_source, questions_json, action_items_json, updated_at
        FROM user_assessments
        WHERE user_id = ? AND year = ?
    """, (user_id, year))
    rows = cursor.fetchall()
    conn.close()

    result = {}
    for r in rows:
        result[r[0]] = {
            "lakshmi_id": r[0],
            "self_score": r[1],
            "automated_score": r[2],
            "score_source": r[3],
            "questions": json.loads(r[4] or "[]"),
            "action_items": json.loads(r[5] or "[]"),
            "updated_at": r[6]
        }

    return {
        "user_id": user_id,
        "year": year,
        "assessments": result
    }

# Save user assessments
@app.post("/api/v1/assessments/{user_id}/{year}")
def save_assessments(user_id: str, year: str, payload: AssessmentPayload):
    conn = sqlite3.connect(str(DB_PATH))
    cursor = conn.cursor()
    
    for lakshmi_id, data in payload.assessments.items():
        self_score = data.get("self_score", 70)
        auto_score = data.get("automated_score", 70)
        source = data.get("score_source", "assessment")
        q_json = json.dumps(data.get("questions", []))
        act_json = json.dumps(data.get("action_items", []))

        cursor.execute("""
            INSERT INTO user_assessments (user_id, year, lakshmi_id, self_score, automated_score, score_source, questions_json, action_items_json, updated_at)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
            ON CONFLICT(user_id, year, lakshmi_id) DO UPDATE SET
                self_score = excluded.self_score,
                automated_score = excluded.automated_score,
                score_source = excluded.score_source,
                questions_json = excluded.questions_json,
                action_items_json = excluded.action_items_json,
                updated_at = CURRENT_TIMESTAMP
        """, (user_id, year, lakshmi_id, self_score, auto_score, source, q_json, act_json))

    conn.commit()
    conn.close()

    return {"status": "success", "message": f"Saved assessments for {user_id} ({year})"}

# Mount assets directory if present
if (DIST_DIR / "assets").exists():
    app.mount("/assets", StaticFiles(directory=str(DIST_DIR / "assets")), name="assets")

# SPA catch-all fallback
@app.get("/{full_path:path}")
def serve_spa(full_path: str):
    target_file = DIST_DIR / full_path
    if full_path and target_file.is_file():
        return FileResponse(target_file)
    index_file = DIST_DIR / "index.html"
    if index_file.exists():
        return FileResponse(index_file)
    return {"message": "Ashta Lakshmi FastAPI backend running. Please run 'npm run build' to generate dist folder."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=3000, reload=False)
