export interface ListItem {
  title: string;
  href: string;
}

export interface Comment {
  author?: string;
  text: string;
  date: Date;
  likes?: number;
}

export interface TabsListItem {
  title: string;
  amount?: number;
}

export interface Poster {
  link?: string;
  logoSrc: string;
  ageBadge?: string;
  rating: number;
  info: string;
  duration: string;
  title?: string;
  extra?: string;
}
