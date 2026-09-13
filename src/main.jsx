import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import keycloak from './auth/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render initial loading indicator while authenticating with Keycloak
root.render(
  <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center', background: '#0f172a', color: '#f8fafc', fontFamily: 'system-ui, sans-serif' }}>
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px' }}>Ashta Lakshmi Platform</div>
      <div style={{ color: '#94a3b8' }}>Authenticating with Keycloak SSO...</div>
    </div>
  </div>
);

keycloak.init({
  onLoad: 'check-sso',
  checkLoginIframe: false,
  pkceMethod: 'S256'
}).then((authenticated) => {
  root.render(
    <React.StrictMode>
      <App keycloak={keycloak} authenticated={Boolean(authenticated)} />
    </React.StrictMode>
  );
}).catch((err) => {
  console.warn('Keycloak SSO check failed or unauthenticated:', err);
  // Still allow public landing page access even if Keycloak check fails or is unreachable
  root.render(
    <React.StrictMode>
      <App keycloak={keycloak} authenticated={false} />
    </React.StrictMode>
  );
});

