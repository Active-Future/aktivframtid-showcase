
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/2c723bd4-c86f-4c64-9555-34a70241ca67.png" 
        alt="AktivFramtid Logo" 
        className="h-10 mr-2" 
      />
    </div>
  );
};

export default Logo;
