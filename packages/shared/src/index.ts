export * from './components';
export * from './hooks/useMicroFrontend';
export { default as MicroFrontendProvider } from './providers/MicroFrontendProvider';
export * from './queries';
export { default as eventBus } from './shared/eventBus';
export * from './stores';
export * from './styles';

// Export styles for easier importing
export { default as GlobalStyles } from './styles/GlobalStyles';
export * from './utils';
