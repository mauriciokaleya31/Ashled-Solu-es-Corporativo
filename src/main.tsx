// Safe fetch guard
if (typeof window !== 'undefined') {
  try {
    const originalFetch = window.fetch;
    let customFetch = originalFetch;
    try {
      Object.defineProperty(window, 'fetch', {
        get() {
          return customFetch || originalFetch;
        },
        set(fn) {
          customFetch = fn;
        },
        configurable: true,
        enumerable: true,
      });
    } catch {
      // ignore
    }
  } catch {
    // ignore
  }
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
