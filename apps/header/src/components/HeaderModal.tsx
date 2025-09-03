import type React from 'react';
import type { Dispatch } from 'react';
import { Modal } from 'shared/components';
import { schema, type schemaTypes } from '../schemas/modalSchemas';

interface HeaderModalProps {
  type: schemaTypes;
  isOpen: boolean;
  onOpenChange: Dispatch<React.SetStateAction<boolean>>;
  onCloseOverride?: () => void;
  onSubmitOverride?: () => void;
  onErrorOverride?: () => void;
}

const HeaderModal: React.FC<HeaderModalProps> = ({
  type,
  isOpen,
  onOpenChange,
  onCloseOverride
}) => {
  const config = schema[type];

  if (!config) return null;
  const handleClose = () => {
    if (config.onClose) {
      config.onClose();
    }
    if (onCloseOverride) {
      onCloseOverride();
    }
    onOpenChange(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={handleClose}
      title={config.header}
      footer={config?.footer ? config.footer : null}
      className="bg-white"
    >
      <div>{config.content}</div>
    </Modal>
  );
};

export default HeaderModal;
