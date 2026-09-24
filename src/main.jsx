import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import keycloak from './auth/keycloak';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Clear stale error hash from URL before Keycloak init if present
if (window.location.hash && (window.location.hash.includes('error=') || window.location.hash.includes('error_description='))) {
  console.warn('Clearing stale error hash from URL before Keycloak init:', window.location.hash);
  window.history.replaceState(null, '', window.location.pathname + window.location.search);
}

const renderApp = (authenticated = false) => {
  root.render(
    <React.StrictMode>
      <App keycloak={keycloak} authenticated={authenticated} />
    </React.StrictMode>
  );
};

// Immediately render the application in guest exploration mode
renderApp(false);

// Initialize Keycloak with non-blocking silent iframe SSO check to prevent redirect toggling loops
keycloak.init({
  onLoad: 'check-sso',
  silentCheckSsoRedirectUri: `${window.location.origin}/silent-check-sso.html`,
  silentCheckSsoFallback: false,
  checkLoginIframe: false,
  pkceMethod: 'S256'
}).then((authenticated) => {
  if (authenticated) {
    renderApp(true);
  }
}).catch((err) => {
  console.warn('Keycloak SSO initialization notice (running in public guest mode):', err);
});
