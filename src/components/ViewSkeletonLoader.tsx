import React from 'react';
import { Flower2 } from 'lucide-react';

interface ViewSkeletonLoaderProps {
  page?: string;
}

export const ViewSkeletonLoader: React.FC<ViewSkeletonLoaderProps> = ({ page = 'general' }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 animate-pulse">
      
      {/* Breadcrumb & Header Skeleton */}
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-[#DE1B76]/20 flex items-center justify-center text-[#DE1B76]">
            <Flower2 className="w-3.5 h-3.5 animate-spin" />
          </div>
          <div className="h-4 w-28 bg-stone-800 rounded-md" />
        </div>

        <div className="h-8 sm:h-10 w-64 sm:w-80 bg-stone-800 rounded-xl" />
        <div className="h-4 w-full max-w-xl bg-stone-800/60 rounded-md" />
      </div>

      {/* Filter / Tabs Skeleton */}
      <div className="flex gap-2.5 overflow-x-auto pb-4 mb-8">
        <div className="h-9 w-24 bg-stone-800 rounded-xl shrink-0" />
        <div className="h-9 w-32 bg-stone-800/70 rounded-xl shrink-0" />
        <div className="h-9 w-28 bg-stone-800/70 rounded-xl shrink-0" />
        <div className="h-9 w-36 bg-stone-800/70 rounded-xl shrink-0" />
      </div>

      {/* Content Grid Skeleton based on view */}
      {page === 'gallery' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-stone-900 border border-stone-800 aspect-[4/3] flex flex-col justify-end p-4">
              <div className="h-4 w-3/4 bg-stone-800 rounded-md mb-2" />
              <div className="h-3 w-1/2 bg-stone-800/60 rounded-md" />
            </div>
          ))}
        </div>
      ) : page === 'products' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#14141A] border border-stone-800 p-5 space-y-4">
              <div className="aspect-[4/3] rounded-xl bg-stone-800" />
              <div className="space-y-2">
                <div className="h-5 w-3/4 bg-stone-700 rounded-md" />
                <div className="h-3 w-full bg-stone-800 rounded-md" />
                <div className="h-3 w-2/3 bg-stone-800 rounded-md" />
              </div>
              <div className="pt-2 flex items-center justify-between">
                <div className="h-6 w-20 bg-stone-800 rounded-md" />
                <div className="h-9 w-28 bg-stone-700 rounded-xl" />
              </div>
            </div>
          ))}
        </div>
      ) : page === 'booking' ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 bg-[#14141A] rounded-2xl p-6 border border-stone-800 space-y-6">
            <div className="h-6 w-48 bg-stone-800 rounded-md" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-24 rounded-xl bg-stone-900 border border-stone-800" />
              ))}
            </div>
            <div className="h-10 w-full bg-stone-800 rounded-xl" />
          </div>
          <div className="lg:col-span-4 bg-[#14141A] rounded-2xl p-6 border border-stone-800 space-y-4">
            <div className="h-5 w-36 bg-stone-800 rounded-md" />
            <div className="h-28 bg-stone-900 rounded-xl" />
            <div className="h-10 w-full bg-stone-800 rounded-xl" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-[#14141A] border border-stone-800 p-5 space-y-4">
              <div className="aspect-[16/10] rounded-xl bg-stone-800" />
              <div className="space-y-2">
                <div className="h-5 w-3/4 bg-stone-700 rounded-md" />
                <div className="h-3 w-full bg-stone-800 rounded-md" />
                <div className="h-3 w-4/5 bg-stone-800 rounded-md" />
              </div>
              <div className="pt-2 flex items-center justify-between border-t border-stone-800">
                <div className="h-6 w-20 bg-stone-800 rounded-md" />
                <div className="h-8 w-24 bg-[#DE1B76]/20 rounded-lg" />
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
