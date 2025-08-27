import React from 'react';
import Modal from 'shared/components/Modal';
import type { HeaderModalProps } from '../types/types';

const HeaderModal: React.FC<HeaderModalProps> = ({
  isOpen,
  onOpenChange,
  title = 'Transferir Chamada',
  children,
  footer,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} title={title} footer={footer}>
      {children || <p>Conteúdo do modal de transferência.</p>}
    </Modal>
  );
};

export default HeaderModal;
