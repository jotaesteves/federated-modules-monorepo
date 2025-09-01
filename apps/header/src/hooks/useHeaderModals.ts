import { useState } from 'react';
import type { schemaTypes } from '../schemas/modalSchemas';

type ModalType = schemaTypes;

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
    sendMessage: false,
    transferCall: false,
    scheduleOutbound: false,
  });

  const createModalHandler = (modalType: ModalType) => ({
    open: () => {
      setModalStates((prev) => ({ ...prev, [modalType]: true }));
    },
    close: () => {
      setModalStates((prev) => ({ ...prev, [modalType]: false }));
    },
    toggle: () => {
      setModalStates((prev) => ({ ...prev, [modalType]: !prev[modalType] }));
    },
    isOpen: modalStates[modalType],
  });

  const modals: ModalHandlers = {
    sendMessage: createModalHandler('sendMessage'),
    transferCall: createModalHandler('transferCall'),
    scheduleOutbound: createModalHandler('scheduleOutbound'),
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
