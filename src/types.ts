export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
  description: string;
}

export type FontOption = 'sans' | 'serif' | 'display' | 'classic' | 'mono' | 'rounded' | 'elegant' | 'modern' | 'writing';

export interface Customization {
  primaryColor: string;
  paperColor: string;
  fontFamily: FontOption;
  sectionOrder: string[];
}

export interface UserData {
  fullName: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  website: string;
  summary: string;
  skills: string[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  // Identity details (Indonesian standard)
  birthPlaceDate: string;
  gender: string;
  religion: string;
  lastEducation: string;
  city: string;
  // Letter specific
  recipientName: string;
  recipientTitle: string;
  companyName: string;
  companyAddress: string;
  letterContent: string;
  letterSubject: string;
  attachments: string[];
  date: string;
  // Customization
  customization: Customization;
  // Integration
  integrationStatus: IntegrationStatus;
}

export type TemplateType = 
  | 'modern' | 'classic' | 'creative' | 'minimalist' 
  | 'professional' | 'executive' | 'elegant' | 'bold' 
  | 'sidebar' | 'grid' | 'compact' | 'academic' 
  | 'tech' | 'startup' | 'vintage' | 'corporate' 
  | 'clean' | 'luxury' | 'artistic' | 'functional'
  | 'vibrant' | 'ocean' | 'forest' | 'royal' | 'sunset';
export type DocumentType = 'cv' | 'letter';

export interface IntegrationStatus {
  linkedin: boolean;
  jobstreet: boolean;
}
