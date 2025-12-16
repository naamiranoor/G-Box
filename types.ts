export enum NavItem {
  HOME = 'HOME',
  GAMES = 'GAMES',
  HARDWARE = 'HARDWARE',
  GLIVE = 'GLIVE',
  NEWS = 'NEWS',
  COMMUNITY = 'COMMUNITY',
  SUPPORT = 'SUPPORT'
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}