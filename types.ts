
export type BioStyle = 'funny' | 'aesthetic' | 'professional' | 'mysterious' | 'minimalist' | 'influencer';

export interface BioRequest {
  niche: string;
  keywords: string;
  style: BioStyle;
  includeEmojis: boolean;
  length: 'short' | 'medium' | 'long';
}

export interface GeneratedBio {
  content: string;
  category: string;
}
