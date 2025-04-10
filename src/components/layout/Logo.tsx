
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src="/lovable-uploads/af-red-with-text.png" 
        alt="AktivFramtid Logo" 
        className="h-10 mr-2" 
      />
    </div>
  );
};

export default Logo;
