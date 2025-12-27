
import React from 'react';
import { BioRequest, BioStyle } from '../types';

interface BioFormProps {
  onSubmit: (data: BioRequest) => void;
  loading: boolean;
}

const BioForm: React.FC<BioFormProps> = ({ onSubmit, loading }) => {
  const [formData, setFormData] = React.useState<BioRequest>({
    niche: '',
    keywords: '',
    style: 'aesthetic',
    includeEmojis: true,
    length: 'medium'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const styles: { value: BioStyle; label: string }[] = [
    { value: 'funny', label: '😂 Funny' },
    { value: 'aesthetic', label: '✨ Aesthetic' },
    { value: 'professional', label: '💼 Professional' },
    { value: 'mysterious', label: '🌑 Mysterious' },
    { value: 'minimalist', label: '⬜ Minimalist' },
    { value: 'influencer', label: '⭐ Influencer' },
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-[#121212] p-6 rounded-2xl border border-white/10">
      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Your Niche</label>
        <input
          required
          type="text"
          placeholder="e.g. Fitness, Cooking, Tech Reviewer"
          className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE2C55] transition-all"
          value={formData.niche}
          onChange={(e) => setFormData({ ...formData, niche: e.target.value })}
        />
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Keywords (comma separated)</label>
        <input
          required
          type="text"
          placeholder="e.g. workout, gymrat, healthy eating"
          className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE2C55] transition-all"
          value={formData.keywords}
          onChange={(e) => setFormData({ ...formData, keywords: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Vibe</label>
          <select
            className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE2C55] transition-all appearance-none"
            value={formData.style}
            onChange={(e) => setFormData({ ...formData, style: e.target.value as BioStyle })}
          >
            {styles.map(s => (
              <option key={s.value} value={s.value}>{s.label}</option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Length</label>
          <select
            className="w-full bg-[#1e1e1e] border border-white/5 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#FE2C55] transition-all appearance-none"
            value={formData.length}
            onChange={(e) => setFormData({ ...formData, length: e.target.value as 'short' | 'medium' | 'long' })}
          >
            <option value="short">Short (One-liner)</option>
            <option value="medium">Medium</option>
            <option value="long">Long (Maxed out)</option>
          </select>
        </div>
      </div>

      <div className="flex items-center space-x-3 bg-[#1e1e1e] p-4 rounded-xl border border-white/5">
        <input
          type="checkbox"
          id="emoji-toggle"
          className="w-5 h-5 accent-[#FE2C55]"
          checked={formData.includeEmojis}
          onChange={(e) => setFormData({ ...formData, includeEmojis: e.target.checked })}
        />
        <label htmlFor="emoji-toggle" className="text-sm text-gray-300 font-medium">Use Emojis?</label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
          loading 
            ? 'bg-gray-700 cursor-not-allowed text-gray-400' 
            : 'tiktok-gradient text-white shadow-lg shadow-[#FE2C55]/20'
        }`}
      >
        {loading ? (
          <div className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span>Generating Fire...</span>
          </div>
        ) : 'Generate My Bio'}
      </button>
    </form>
  );
};

export default BioForm;
