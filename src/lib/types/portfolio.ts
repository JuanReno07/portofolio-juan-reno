export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
  icon: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  responsibility: string;
  technologies: string[];
  impact: string;
  slug: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  instagram?: string;
  location: string;
}
