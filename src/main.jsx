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

// Initialize Keycloak with check-sso to allow public guest exploration
keycloak.init({
  onLoad: 'check-sso',
  checkLoginIframe: false,
  pkceMethod: 'S256',
  redirectUri: window.location.origin + '/'
}).then((authenticated) => {
  root.render(
    <React.StrictMode>
      <App keycloak={keycloak} authenticated={Boolean(authenticated)} />
    </React.StrictMode>
  );
}).catch((err) => {
  console.warn('Keycloak authentication check-sso failed or offline, launching in public guest mode:', err);
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
  root.render(
    <React.StrictMode>
      <App keycloak={null} authenticated={false} />
    </React.StrictMode>
  );
});
