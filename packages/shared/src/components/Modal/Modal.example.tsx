import React, { useState } from 'react';
import Modal from './Modal';
import { DialogClose } from '../ui/dialog';
import { Button } from '../ui/button';

// Simula o ícone do Figma (podes substituir por um ícone real)
const SurveyIcon = () => (
  <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
    <span className="text-white text-sm">📋</span>
  </div>
);

// Simula as mensagens do chat do Figma
const ChatMessage = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-green-100 border border-green-200 rounded-lg p-4 mb-3">
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-white text-xs">👤</span>
      </div>
      <div className="text-sm text-green-800">{children}</div>
    </div>
  </div>
);

export const ModalExample: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSendSurvey = () => {
    console.log('Enviando inquérito...');
    alert('Inquérito enviado com sucesso!');
    // Modal fecha automaticamente pelo DialogClose
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Exemplo do Modal</h2>

      {/* Botão para abrir o modal */}
      <Button onClick={() => setIsOpen(true)}>Abrir Modal de Inquérito</Button>

      {/* Modal baseado no design do Figma */}
      <Modal
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        icon={<SurveyIcon />}
        title="Enviar inquérito"
        description="Enviar inquérito de satisfação ao cliente"
        size="md"
        className="max-w-md"
        footer={
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button
                onClick={handleSendSurvey}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6"
              >
                Enviar inquérito
              </Button>
            </DialogClose>
          </div>
        }
      >
        {/* Conteúdo que simula as mensagens do chat */}
        <div className="space-y-3">
          <div className="text-sm font-medium mb-3">Em linha, dizer ao Cliente...</div>

          <ChatMessage>
            "Gostaríamos de convidá-lo a participar num inquérito de satisfação que visa avaliar o
            atendimento prestado, deseja prosseguir?"
          </ChatMessage>

          <div className="text-xs text-green-600 font-medium mb-2">Resposta do Cliente é "Sim"</div>

          <ChatMessage>
            "Por favor mantenha-se me linha. Muito obrigado por nos ter contactado, tenha um [bom
            dia/boa tarde/boa noite]."
          </ChatMessage>
        </div>
      </Modal>
    </div>
  );
};

export default ModalExample;
