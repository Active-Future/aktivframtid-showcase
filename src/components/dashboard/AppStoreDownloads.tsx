
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Apple, PlayCircle } from 'lucide-react';

const AppStoreDownloads = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in [animation-delay:200ms] mb-6">
      <Card className="download-card group hover:scale-[1.02] transition-transform">
        <div className="bg-gradient-to-br from-[#000000] to-[#1a1a1a] p-6 text-white">
          <div className="flex items-center mb-4">
            <div className="download-icon bg-white mr-3">
              <Apple size={24} className="text-black" />
            </div>
            <span className="platform-label">App Store</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="download-count">1M+</span>
              <div className="ml-2 px-2 py-1 bg-white/10 rounded text-xs font-medium">
                +8.3% ↑
              </div>
            </div>
            <span className="download-text mt-1">Total downloads across iOS devices</span>
          </div>
          
          <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{width: '73%'}}></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-white/60">iOS 16+</span>
            <span className="text-xs text-white/60">73% of total</span>
          </div>
        </div>
      </Card>
      
      <Card className="download-card group hover:scale-[1.02] transition-transform">
        <div className="bg-gradient-to-br from-aktivGreen-base to-aktivGreen-tertiary p-6 text-white">
          <div className="flex items-center mb-4">
            <div className="download-icon bg-white/20 mr-3">
              <PlayCircle size={24} />
            </div>
            <span className="platform-label">Play Store</span>
          </div>
          
          <div className="flex flex-col">
            <div className="flex items-baseline">
              <span className="download-count">2M+</span>
              <div className="ml-2 px-2 py-1 bg-white/10 rounded text-xs font-medium">
                +12.7% ↑
              </div>
            </div>
            <span className="download-text mt-1">Total downloads across Android devices</span>
          </div>
          
          <div className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{width: '85%'}}></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-white/60">Android 10+</span>
            <span className="text-xs text-white/60">85% of total</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default AppStoreDownloads;
