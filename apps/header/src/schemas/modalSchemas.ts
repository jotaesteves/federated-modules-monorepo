export type schemaConfigType = {
  onClose?: () => void;
  onSubmit?: () => void;
  onError?: () => void;
  header: React.ReactNode | string;
  content: React.ReactNode;
  footer?: React.ReactNode | string;
};

export const schema: Record<string, schemaConfigType> = {
  sendMessage: {
    onClose: () => {},
    onSubmit: () => {},
    onError: () => {},
    header: 'Enviar Mensagem',
    content: 'Conteúdo do modal de envio de mensagem.',
    footer: 'Enviar Inquérito',
  },
  transferCall: {
    onClose: () => {},
    onSubmit: () => {},
    onError: () => {},
    header: 'Transferir Chamada',
    content: 'Conteúdo do modal de transferência de chamada.',
  },
  scheduleOutbound: {
    onClose: () => {},
    onSubmit: () => {},
    onError: () => {},
    header: 'Marcar Outbound',
    content: 'Conteúdo do modal de agendamento de outbound',
    footer: 'Confirmar | Cancelar',
  },
};

export type schemaTypes = keyof typeof schema;
