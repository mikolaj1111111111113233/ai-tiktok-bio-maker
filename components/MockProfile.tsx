
import React from 'react';

interface MockProfileProps {
  bio: string;
}

const MockProfile: React.FC<MockProfileProps> = ({ bio }) => {
  return (
    <div className="w-full max-w-sm mx-auto bg-black border border-white/20 rounded-[40px] overflow-hidden shadow-2xl overflow-y-auto aspect-[9/19] flex flex-col relative">
      {/* Phone Status Bar */}
      <div className="h-10 flex justify-between items-center px-8 pt-4">
        <span className="text-xs font-bold text-white">9:41</span>
        <div className="flex space-x-1.5 items-center">
          <div className="w-4 h-4 rounded-full border border-white/20"></div>
          <div className="w-4 h-4 rounded-full border border-white/20"></div>
          <div className="w-6 h-3 rounded-[2px] border border-white/40"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-6 mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <span className="font-bold text-white">Your Name</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
        </svg>
      </div>

      {/* Profile Pic */}
      <div className="flex flex-col items-center mt-6">
        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-gray-800 to-gray-600 border-2 border-[#FE2C55] p-1">
          <img 
            src="https://picsum.photos/200" 
            alt="Profile" 
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <span className="mt-3 font-semibold text-white">@yourusername</span>
      </div>

      {/* Stats */}
      <div className="flex justify-center space-x-8 mt-6">
        <div className="text-center">
          <div className="font-bold text-white">12.5K</div>
          <div className="text-[11px] text-gray-500">Following</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-white">450K</div>
          <div className="text-[11px] text-gray-500">Followers</div>
        </div>
        <div className="text-center">
          <div className="font-bold text-white">2.1M</div>
          <div className="text-[11px] text-gray-500">Likes</div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-2 mt-6 px-6">
        <button className="flex-1 bg-[#FE2C55] text-white py-2.5 rounded-[4px] font-bold text-sm">Follow</button>
        <button className="bg-[#2a2a2a] text-white px-4 py-2.5 rounded-[4px] font-bold text-sm">Message</button>
        <button className="bg-[#2a2a2a] text-white px-3 py-2.5 rounded-[4px]">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* THE BIO (Preview Target) */}
      <div className="mt-6 px-10 text-center">
        <p className="text-sm text-gray-200 whitespace-pre-wrap">
          {bio || "Your fire bio will appear here..."}
        </p>
        <div className="mt-4 flex items-center justify-center space-x-1 text-xs text-gray-400 font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="text-[#FE2C55]">linktree.com/you</span>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="mt-8 border-t border-white/5 flex">
        <div className="flex-1 flex justify-center py-4 border-b-2 border-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
        <div className="flex-1 flex justify-center py-4 text-gray-600">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>
      </div>

      {/* Video Grid Mock */}
      <div className="grid grid-cols-3 gap-0.5 mt-0.5 p-0.5 bg-black">
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="aspect-[3/4] bg-gray-900 relative">
             <div className="absolute bottom-1 left-1 flex items-center space-x-0.5 text-[8px] font-bold">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2" fill="currentColor" viewBox="0 0 20 20">
                 <path d="M10 12l-6-4h12l-6 4z" />
               </svg>
               <span>{(Math.random() * 100).toFixed(1)}k</span>
             </div>
          </div>
        ))}
      </div>

      {/* Bottom Bar Spacer */}
      <div className="mt-auto h-2 w-32 bg-white/20 rounded-full mx-auto mb-2"></div>
    </div>
  );
};

export default MockProfile;
