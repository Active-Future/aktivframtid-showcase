import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { LightbulbIcon } from 'lucide-react';

type FinancialTipProps = {
  tip: string;
};

// We're keeping this component but not using it on the dashboard anymore
const FinancialTip = ({ tip }: FinancialTipProps) => {
  return (
    <Card className="bg-primary/5 border-primary/20 mb-6 animate-fade-in">
      <CardContent className="p-4">
        <div className="flex items-start space-x-3">
          <div className="bg-primary/10 rounded-full p-2 text-primary">
            <LightbulbIcon size={18} />
          </div>
          <div>
            <h3 className="text-sm font-medium mb-1">Tip of the week</h3>
            <p className="text-sm text-muted-foreground">{tip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialTip;
