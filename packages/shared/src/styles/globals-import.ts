// Side-effect import to ensure Tailwind CSS from the shared package is bundled when
// this module is imported via Module Federation (e.g., import 'shared/styles/tailwind-import').
// This avoids consumers needing to know the CSS file path.

import './globals.css';

// No exports are required; the import above applies global styles.
export {};
