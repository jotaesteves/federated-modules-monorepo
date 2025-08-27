import * as React from 'react';
import { Card } from 'shared/components';

const LastContact: React.FC = () => {
  return (
    <Card title="Last Contact" className="h-full">
      <p className="text-sm text-muted-foreground">Date: 2025-08-01</p>
      <p className="text-sm text-muted-foreground">Channel: Phone</p>
      <p className="text-sm text-muted-foreground">Agent: John Doe</p>
      <p className="text-sm text-muted-foreground">Subject: Account inquiry</p>
    </Card>
  );
};

export default LastContact;
