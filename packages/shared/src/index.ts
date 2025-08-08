export * from './components';
export * from './utils';
export * from './stores';
export * from './queries';
export * from './hooks/useMicroFrontend';
export { default as MicroFrontendProvider } from './providers/MicroFrontendProvider';
export { default as eventBus } from './shared/eventBus';

// Export styles for easier importing
export { default as Global } from './styles/Global';

// Import global demo styles
export * from './styles';
