import React, { type Dispatch } from 'react';
import Modal from 'shared/components/Modal';

type schemaConfigType = {
  onClose?: () => void;
  onSubmit?: () => void;
  onError?: () => void;
  header: React.ReactNode | string;
  content: React.ReactNode;
  footer?: React.ReactNode | string;
};

const schema: Record<string, schemaConfigType> = {
  transferCall: {
    onClose: () => {
      // Transfer modal specific close logic
    },
    onSubmit: () => {
      console.log('Transfer form submitted');
    },
    onError: () => {
      // Transfer error handling
    },
    header: 'Transferir Chamada',
    content: 'Conteúdo do modal de transferência de chamada.',
    footer: 'btnClose',
  },
  sendMessage: {
    onClose: () => {
      // Send message modal specific close logic
    },
    onSubmit: () => {
      console.log('Message send');
    },
    onError: () => {
      // Send message error handling
    },
    header: 'Enviar Mensagem',
    content: 'Conteúdo do modal de envio de mensagem.',
  },
  receiveCall: {
    onClose: () => {
      // Receive call modal specific close logic
    },
    onSubmit: () => {
      console.log('Receive Call');
    },
    onError: () => {
      // Receive call error handling
    },
    header: 'Receber Chamada',
    content: 'Chamada recebida de +258 84 123 4567',
    footer: 'Aceitar | Recusar',
  },
  pauseCall: {
    onClose: () => {
      // Pause call modal close logic
    },
    onSubmit: () => {
      // Call paused logic
    },
    onError: () => {
      // Pause call error handling
    },
    header: 'Pausar Chamada',
    content: 'Deseja pausar a chamada atual?',
    footer: 'Pausar | Cancelar',
  },
};

type schemaTypes = keyof typeof schema;

interface HeaderModalProps {
  type: schemaTypes;
  isOpen: boolean;
  onOpenChange: Dispatch<React.SetStateAction<boolean>>;
  // Optional override functions for custom behavior
  onCloseOverride?: () => void;
  onSubmitOverride?: () => void;
  onErrorOverride?: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({
  type,
  isOpen,
  onOpenChange,
  onCloseOverride,
  onSubmitOverride,
  onErrorOverride,
}) => {
  const config = schema[type];

  if (!config) return null;

  // Enhanced onClose logic that handles both schema and parent state
  const handleClose = () => {
    // Execute schema-specific onClose logic if it exists
    if (config.onClose) {
      config.onClose();
    }

    // Execute override onClose logic if provided
    if (onCloseOverride) {
      onCloseOverride();
    }

    // Always close the modal by updating parent state
    onOpenChange(false);
  };

  // Enhanced onSubmit logic
  const handleSubmit = () => {
    if (onSubmitOverride) {
      onSubmitOverride();
    } else if (config.onSubmit) {
      config.onSubmit();
    }
  };

  // Enhanced onError logic
  const _handleError = () => {
    if (onErrorOverride) {
      onErrorOverride();
    } else if (config.onError) {
      config.onError();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={handleClose} // This handles clicking outside or ESC key
      title={config.header}
      footer={config?.footer ? config.footer : null}
      className="bg-white"
    >
      <div>
        {config.content}

        {/* Example of using the enhanced logic */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600"
          >
            Submit
          </button>
          <button
            onClick={handleClose}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default HeaderModal;
