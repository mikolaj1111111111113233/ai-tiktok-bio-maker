
import React, { useState } from 'react';
import { BioRequest, GeneratedBio } from './types';
import { generateBios } from './services/geminiService';
import BioForm from './components/BioForm';
import MockProfile from './components/MockProfile';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [bios, setBios] = useState<GeneratedBio[]>([]);
  const [selectedBioIndex, setSelectedBioIndex] = useState(0);
  const [copySuccess, setCopySuccess] = useState<number | null>(null);

  const handleGenerate = async (params: BioRequest) => {
    setLoading(true);
    try {
      const results = await generateBios(params);
      setBios(results);
      setSelectedBioIndex(0);
    } catch (error) {
      alert("Error generating bios. Please check your API key.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopySuccess(index);
    setTimeout(() => setCopySuccess(null), 2000);
  };

  return (
    <div className="min-h-screen pb-20 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Navbar */}
      <nav className="py-8 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="tiktok-gradient p-2 rounded-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.03-2.85-.31-4.13-1.03-2.28-1.29-3.55-3.81-3.25-6.39.21-1.89 1.14-3.66 2.67-4.85 1.34-1.03 3.1-1.5 4.79-1.29.13-.04.13-.05.13-.19.01-1.13-.01-2.26.01-3.39-1.3-.11-2.61.08-3.83.56-1.1.43-2.11 1.1-2.92 1.97-1.44 1.54-2.15 3.61-2.02 5.69.11 1.71.74 3.39 1.84 4.72 1.1 1.33 2.61 2.3 4.26 2.72 1.62.42 3.36.31 4.9-.3 1.54-.61 2.87-1.68 3.75-3.1.84-1.35 1.25-2.95 1.18-4.54-.04-4.52-.01-9.04-.03-13.56z" />
            </svg>
          </div>
          <span className="text-2xl font-black tracking-tighter">BioPulse</span>
        </div>
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-gray-400">
          <a href="#" className="hover:text-white transition-colors">How it works</a>
          <a href="#" className="hover:text-white transition-colors">Pricing</a>
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-full hover:bg-white/10 transition-all">
            Dashboard
          </button>
        </div>
      </nav>

      <main className="grid lg:grid-cols-2 gap-12 mt-8 items-start">
        {/* Left Column: Input and Results */}
        <div className="space-y-8 order-2 lg:order-1">
          <header className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black leading-tight">
              Craft the Perfect <br />
              <span className="text-transparent bg-clip-text tiktok-gradient">TikTok First Impression</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl">
              Stop struggling with bio character limits. Use Gemini-powered AI to generate bios that convert scrollers into followers.
            </p>
          </header>

          <BioForm onSubmit={handleGenerate} loading={loading} />

          {bios.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold flex items-center space-x-2">
                <span>✨ Fresh Picks</span>
                <span className="text-xs bg-white/10 px-2 py-1 rounded text-gray-400 font-normal">Select one to preview</span>
              </h3>
              <div className="grid gap-3">
                {bios.map((bio, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedBioIndex(index)}
                    className={`group cursor-pointer p-5 rounded-2xl border transition-all relative ${
                      selectedBioIndex === index 
                        ? 'border-[#FE2C55] bg-[#FE2C55]/5' 
                        : 'border-white/10 bg-[#121212] hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] uppercase tracking-widest font-bold text-gray-500 bg-white/5 px-2 py-0.5 rounded">
                        {bio.category}
                      </span>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          copyToClipboard(bio.content, index);
                        }}
                        className={`text-xs px-3 py-1 rounded-full border transition-all ${
                          copySuccess === index 
                            ? 'bg-green-500/10 border-green-500/50 text-green-500' 
                            : 'border-white/20 hover:border-[#FE2C55] hover:text-[#FE2C55]'
                        }`}
                      >
                        {copySuccess === index ? 'Copied!' : 'Copy'}
                      </button>
                    </div>
                    <p className="text-white font-medium pr-12 leading-relaxed">
                      {bio.content}
                    </p>
                    <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                       <svg className="w-6 h-6 text-[#FE2C55]" fill="currentColor" viewBox="0 0 20 20">
                         <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                       </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Preview */}
        <div className="lg:sticky lg:top-8 order-1 lg:order-2">
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-1 tiktok-gradient rounded-[45px] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative">
               <div className="absolute -top-12 left-1/2 -translate-x-1/2 text-center w-full">
                 <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">Real-time Preview</span>
               </div>
               <MockProfile bio={bios[selectedBioIndex]?.content || ""} />
            </div>

            {/* Floatings Elements */}
            <div className="absolute -right-8 top-1/4 bg-[#121212] border border-white/10 p-4 rounded-2xl shadow-2xl hidden xl:block animate-bounce duration-[3000ms]">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                   </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Retention</div>
                  <div className="text-lg font-black text-white">+42%</div>
                </div>
              </div>
            </div>

            <div className="absolute -left-12 bottom-1/4 bg-[#121212] border border-white/10 p-4 rounded-2xl shadow-2xl hidden xl:block animate-pulse">
               <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-[#FE2C55]/20 flex items-center justify-center text-[#FE2C55]">
                   <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                     <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                   </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-bold uppercase">Engagement</div>
                  <div className="text-lg font-black text-white">9.8k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-32 pt-8 border-t border-white/5 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} BioPulse AI. Powering the next generation of creators.</p>
      </footer>
    </div>
  );
};

export default App;
