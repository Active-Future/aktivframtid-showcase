import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, PlayCircle } from "lucide-react";

const AppStoreDownloads = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 animate-fade-in [animation-delay:200ms] mb-6 w-full max-w-4xl">
        <Card className="download-card group hover:scale-[1.02] transition-transform shadow-md p-0 rounded-xl overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-[#000000] to-[#1a1a1a] p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="download-icon bg-white rounded-full mr-3">
                <Apple size={24} className="text-black" />
              </div>
              <span className="platform-label font-medium">App Store</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="download-count text-2xl font-bold">1M+</span>
                <div className="ml-2 px-2 py-1 bg-white/10 rounded text-xs font-medium">
                  +8.3% ↑
                </div>
              </div>
            </div>
            <span className="download-text mt-1">
              Total downloads across iOS devices
            </span>
          </div>
        </Card>

        <Card className="download-card group hover:scale-[1.02] transition-transform shadow-md p-0 rounded-xl overflow-hidden">
          <div className="bg-gradient-to-br from-aktivGreen-base to-aktivGreen-tertiary rounded-xl p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="download-icon bg-white/20 rounded-full mr-3">
                <PlayCircle size={24} />
              </div>
              <span className="platform-label font-medium">Play Store</span>
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline">
                <span className="download-count text-2xl font-bold">2M+</span>
                <div className="ml-2 px-2 py-1 bg-white/10 rounded text-xs font-medium">
                  +12.7% ↑
                </div>
              </div>
              <span className="download-text mt-1">
                Total downloads across Android devices
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AppStoreDownloads;
