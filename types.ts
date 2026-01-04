
export interface Skill {
  name: string;
  icon?: string;
  customIcon?: string;
  logoUrl?: string;
}

export interface Project {
  title: string;
  date: string;
  role: string;
  platform: string;
  description: string;
  iconUrl: string;
  bgUrl?: string;
}

export interface Experience {
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface LeadershipItem {
  title: string;
  description: string;
}
