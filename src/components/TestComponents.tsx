import * as React from 'react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/sonner';

export const TestComponents = () => {
  const testToast = () => {
    toast('Test notification', {
      description: 'If you see this, the toast component is working!',
    });
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Component Test</h2>
      <Button onClick={testToast}>Test Toast</Button>
    </div>
  );
};