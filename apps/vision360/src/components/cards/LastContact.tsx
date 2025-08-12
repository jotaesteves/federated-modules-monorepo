import * as React from 'react';
import Card from 'shared/components/Card';

const LastContact: React.FC = () => {
  return (
    <Card icon="↺" title="Últimos contactos" className="h-full">
      <p className="text-sm text-muted-foreground">Data: 2025-08-01</p>
      <p className="text-sm text-muted-foreground">Canal: Phone</p>
      <p className="text-sm text-muted-foreground">Agente: John Doe</p>
      <p className="text-sm text-muted-foreground">Assunto: Account inquiry</p>
    </Card>
  );
};

export default LastContact;
