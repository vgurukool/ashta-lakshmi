import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import keycloak from './auth/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Ashta Lakshmi Wealth Assessment</div>
      <div style={{ color: '#94a3b8' }}>Authenticating with Keycloak SSO...</div>
    </div>
  </div>
);

keycloak.init({
  onLoad: 'login-required',
  checkLoginIframe: false,
  pkceMethod: 'S256'
}).then((authenticated) => {
  if (authenticated) {
    root.render(
      <React.StrictMode>
        <App keycloak={keycloak} authenticated={true} />
      </React.StrictMode>
    );
  }
}).catch((err) => {
  console.error('Keycloak authentication failed', err);
  root.render(
    <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0f172a', color: '#f87171', fontFamily: 'system-ui, sans-serif' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Authentication Error</div>
        <div style={{ color: '#94a3b8', marginBottom: '16px' }}>Failed to connect to Keycloak SSO.</div>
        <button onClick={() => keycloak.login()} style={{ padding: '8px 16px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Retry Login</button>
      </div>
    </div>
  );
});

