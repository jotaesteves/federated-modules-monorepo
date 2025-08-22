/* eslint-disable no-console */

// Add global error handling for microfrontend loading failures
window.addEventListener('error', (event) => {
  if (
    event.message?.includes('Loading script failed') ||
    event.message?.includes('ScriptExternalLoadError') ||
    event.filename?.includes('remoteEntry.js')
  ) {
    console.warn('Microfrontend script loading failed, but app will continue:', event.error);
    // Don't prevent the error from propagating, just log it
    return true;
  }
  return false;
});

window.addEventListener('unhandledrejection', (event) => {
  if (
    event.reason?.message?.includes('Loading script failed') ||
    event.reason?.message?.includes('ScriptExternalLoadError') ||
    event.reason?.message?.includes('remoteEntry.js')
  ) {
    console.warn('Microfrontend promise rejection handled:', event.reason);
    event.preventDefault(); // Prevent unhandled rejection
    return true;
  }
  return false;
});

// Instead of preventing errors globally, let's create a robust bootstrap with retry logic
async function initializeApp() {
  try {
    await import('./bootstrap');
  } catch (error) {
    console.error('Initial bootstrap failed, attempting fallback initialization:', error);

    // Create minimal app shell if bootstrap completely fails
    const container = document.getElementById('app');
    if (container) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      container.innerHTML = `
        <div style="display: flex; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif; flex-direction: column;">
          <div style="text-align: center; max-width: 500px; padding: 20px;">
            <h1 style="color: #ef4444; margin-bottom: 16px;">Application Loading Error</h1>
            <p style="margin-bottom: 20px; color: #6b7280;">Some components failed to load. The application is running in fallback mode.</p>
            <div style="margin-bottom: 20px;">
              <button onclick="window.location.reload()" style="padding: 12px 24px; margin: 5px; cursor: pointer; background: #3b82f6; color: white; border: none; border-radius: 6px;">
                Refresh Page
              </button>
              <button onclick="document.getElementById('error-details').style.display = document.getElementById('error-details').style.display === 'none' ? 'block' : 'none'" style="padding: 12px 24px; margin: 5px; cursor: pointer; background: #6b7280; color: white; border: none; border-radius: 6px;">
                Show Details
              </button>
            </div>
            <div id="error-details" style="display: none; text-align: left; background: #f3f4f6; padding: 16px; border-radius: 6px; font-family: monospace; font-size: 12px; color: #374151;">
              ${errorMessage}
            </div>
          </div>
        </div>
      `;
    }
  }
}

// Initialize the app
initializeApp();

// Register service worker only in production builds
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch((registrationError) => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
