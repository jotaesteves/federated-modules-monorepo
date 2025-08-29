import React from 'react';
import { useHeaderModals } from '../hooks/useHeaderModals';
import HeaderModal from './HeaderModal';

/**
 * Example component demonstrating various ways to use the hook-based HeaderModal system
 */
const HeaderModalExample: React.FC = () => {
  const { modals, closeAllModals, modalStates } = useHeaderModals();

  // Example custom handlers
  const handleTransferWithValidation = () => {
    // Add validation logic here
    const isValid = true; // Your validation logic

    if (isValid) {
      modals.transferCall.open();
    } else {
      // Handle validation error
    }
  };

  const handleCustomTransferSubmit = () => {
    // Custom transfer logic
    // API call, validation, etc.

    // Close modal after successful operation
    modals.transferCall.close();
  };

  const handleCustomClose = () => {
    // Custom cleanup logic
    // Save form data, reset state, etc.
  };

  const handleBatchOperations = () => {
    // Example of opening multiple modals based on conditions
    if (Math.random() > 0.5) {
      modals.receiveCall.open();
    } else {
      modals.sendMessage.open();
    }
  };

  // Check if any modal is open
  const hasOpenModals = Object.values(modalStates).some((state) => state);

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">HeaderModal Hook Examples</h2>

      {/* Status Display */}
      <div className="bg-gray-100 p-4 rounded">
        <h3 className="font-semibold mb-2">Modal States:</h3>
        <ul className="space-y-1">
          <li>Transfer Call: {modals.transferCall.isOpen ? '🟢 Open' : '🔴 Closed'}</li>
          <li>Send Message: {modals.sendMessage.isOpen ? '🟢 Open' : '🔴 Closed'}</li>
          <li>Receive Call: {modals.receiveCall.isOpen ? '🟢 Open' : '🔴 Closed'}</li>
          <li>Pause Call: {modals.pauseCall.isOpen ? '🟢 Open' : '🔴 Closed'}</li>
        </ul>
        <p className="mt-2 font-medium">
          Status: {hasOpenModals ? '⚠️ Has Open Modals' : '✅ All Closed'}
        </p>
      </div>

      {/* Control Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {/* Basic Operations */}
        <div className="space-y-2">
          <h3 className="font-semibold">Basic Operations</h3>
          <button
            onClick={() => modals.transferCall.open()}
            className="block w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Open Transfer Modal
          </button>
          <button
            onClick={() => modals.sendMessage.open()}
            className="block w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Open Send Message Modal
          </button>
          <button
            onClick={() => modals.receiveCall.open()}
            className="block w-full px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            Open Receive Call Modal
          </button>
          <button
            onClick={() => modals.pauseCall.open()}
            className="block w-full px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          >
            Open Pause Call Modal
          </button>
        </div>

        {/* Advanced Operations */}
        <div className="space-y-2">
          <h3 className="font-semibold">Advanced Operations</h3>
          <button
            onClick={handleTransferWithValidation}
            className="block w-full px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600"
          >
            Transfer with Validation
          </button>
          <button
            onClick={() => modals.transferCall.toggle()}
            className="block w-full px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
          >
            Toggle Transfer Modal
          </button>
          <button
            onClick={handleBatchOperations}
            className="block w-full px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600"
          >
            Random Modal Operation
          </button>
          <button
            onClick={closeAllModals}
            className="block w-full px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            🚨 Close All Modals
          </button>
        </div>
      </div>

      {/* Modal Implementations */}

      {/* 1. Basic Modal */}
      <HeaderModal
        type="transferCall"
        isOpen={modals.transferCall.isOpen}
        onOpenChange={() => modals.transferCall.close()}
      />

      {/* 2. Modal with Custom Close Handler */}
      <HeaderModal
        type="sendMessage"
        isOpen={modals.sendMessage.isOpen}
        onOpenChange={() => modals.sendMessage.close()}
        onCloseOverride={handleCustomClose}
      />

      {/* 3. Modal with Custom Submit Handler */}
      <HeaderModal
        type="receiveCall"
        isOpen={modals.receiveCall.isOpen}
        onOpenChange={() => modals.receiveCall.close()}
        onSubmitOverride={() => {
          // Accept call logic
          modals.receiveCall.close();
        }}
      />

      {/* 4. Modal with Both Custom Handlers */}
      <HeaderModal
        type="pauseCall"
        isOpen={modals.pauseCall.isOpen}
        onOpenChange={() => modals.pauseCall.close()}
        onCloseOverride={handleCustomClose}
        onSubmitOverride={handleCustomTransferSubmit}
      />
    </div>
  );
};

export default HeaderModalExample;
