# HeaderModal Hook-Based Implementation

This document showcases the different implementations and examples of the hook-based HeaderModal system.

## Features Implemented

### 1. Custom Hook for Modal Management (`useHeaderModals`)

The `useHeaderModals` hook provides centralized state management for all header modals:

```typescript
const { modals, closeAllModals, modalStates } = useHeaderModals();

// Access individual modal controls
modals.transferCall.open(); // Opens the transfer call modal
modals.transferCall.close(); // Closes the transfer call modal
modals.transferCall.toggle(); // Toggles the transfer call modal
modals.transferCall.isOpen; // Boolean state of the modal

// Emergency close all modals
closeAllModals();

// Access raw modal states
modalStates.transferCall; // Boolean state
```

### 2. Enhanced HeaderModal Component

The HeaderModal component now supports:

- **Schema-based configuration**: Each modal type has predefined behavior
- **Override functions**: Custom onClose, onSubmit, onError handlers
- **Proper state management**: Communicates back to parent component
- **Event handling**: Handles clicking outside, ESC key, and explicit close buttons

### 3. Multiple Implementation Examples

#### Basic Usage

```tsx
<HeaderModal
  type="transferCall"
  isOpen={modals.transferCall.isOpen}
  onOpenChange={() => modals.transferCall.close()}
/>
```

#### With Custom Close Handler

```tsx
<HeaderModal
  type="sendMessage"
  isOpen={modals.sendMessage.isOpen}
  onOpenChange={() => modals.sendMessage.close()}
  onCloseOverride={() => {
    // Custom cleanup logic
    console.log('Custom close logic executed');
  }}
/>
```

#### With Custom Submit Handler

```tsx
<HeaderModal
  type="receiveCall"
  isOpen={modals.receiveCall.isOpen}
  onOpenChange={() => modals.receiveCall.close()}
  onSubmitOverride={() => {
    // Custom submit logic
    console.log('Call accepted!');
    modals.receiveCall.close();
  }}
/>
```

#### With Both Custom Handlers

```tsx
<HeaderModal
  type="pauseCall"
  isOpen={modals.pauseCall.isOpen}
  onOpenChange={() => modals.pauseCall.close()}
  onCloseOverride={() => {
    // Custom close logic
  }}
  onSubmitOverride={() => {
    // Custom submit logic
    modals.pauseCall.close();
  }}
/>
```

## Modal Types Available

1. **transferCall**: For transferring active calls
2. **sendMessage**: For sending messages to customers
3. **receiveCall**: For handling incoming calls
4. **pauseCall**: For pausing active calls

## Key Benefits

### 1. Centralized State Management

- All modal states managed in one place
- Easy to debug and maintain
- Consistent state updates

### 2. Flexible Override System

- Schema provides default behavior
- Ability to override specific actions
- Maintains backward compatibility

### 3. Proper Event Handling

- Handles all modal close events (outside click, ESC, button click)
- Proper communication between child and parent components
- Consistent state synchronization

### 4. Developer Experience

- Type-safe modal operations
- Clear separation of concerns
- Easy to extend with new modal types

## Usage Patterns

### Opening Modals

```typescript
// From button clicks
const handleTransferClick = () => {
  modals.transferCall.open();
};

// Programmatically
useEffect(() => {
  if (someCondition) {
    modals.receiveCall.open();
  }
}, [someCondition]);
```

### Closing Modals

```typescript
// Individual modal
modals.transferCall.close();

// All modals (emergency close)
closeAllModals();

// With custom logic
const handleCustomClose = () => {
  // Custom cleanup
  saveFormData();
  modals.sendMessage.close();
};
```

### Checking Modal State

```typescript
// Individual state
if (modals.transferCall.isOpen) {
  // Modal is open
}

// All states
const hasOpenModals = Object.values(modalStates).some((state) => state);
```

## Architecture Benefits

1. **Scalability**: Easy to add new modal types
2. **Maintainability**: Centralized configuration and state
3. **Testability**: Clear separation of concerns
4. **Performance**: Optimized re-renders with proper state management
5. **User Experience**: Consistent modal behavior across the application
