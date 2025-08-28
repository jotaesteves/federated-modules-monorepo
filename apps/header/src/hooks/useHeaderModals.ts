import { useState } from 'react';

type ModalType = 'transferCall' | 'sendMessage' | 'receiveCall' | 'pauseCall';

interface ModalState {
  [key: string]: boolean;
}

interface ModalHandlers {
  [key: string]: {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: boolean;
  };
}

export const useHeaderModals = () => {
  const [modalStates, setModalStates] = useState<ModalState>({
    transferCall: false,
    sendMessage: false,
    receiveCall: false,
    pauseCall: false,
  });

  const createModalHandler = (modalType: ModalType) => ({
    open: () => {
      // Opening modal logic
      setModalStates((prev) => ({ ...prev, [modalType]: true }));
    },
    close: () => {
      // Closing modal logic
      setModalStates((prev) => ({ ...prev, [modalType]: false }));
    },
    toggle: () => {
      setModalStates((prev) => ({ ...prev, [modalType]: !prev[modalType] }));
    },
    isOpen: modalStates[modalType],
  });

  const modals: ModalHandlers = {
    transferCall: createModalHandler('transferCall'),
    sendMessage: createModalHandler('sendMessage'),
    receiveCall: createModalHandler('receiveCall'),
    pauseCall: createModalHandler('pauseCall'),
  };

  const closeAllModals = () => {
    // Closing all modals
    setModalStates({
      transferCall: false,
      sendMessage: false,
      receiveCall: false,
      pauseCall: false,
    });
  };

  return {
    modals,
    closeAllModals,
    modalStates,
  };
};
