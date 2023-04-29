import { Person } from "./Person";

export interface ListItem {
  title: string;
  href?: string;
}

export interface CommentItem {
  author?: string;
  text: string;
  date: string;
  likes?: number;
  level?: number;
  children?: CommentItem[];
}

export interface TabsListItem {
  title: string;
  count?: number;
  href?: string;
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

export type HeaderItem = {
  title: string;
  dropdown: React.ReactNode;
  href: string;
};

export interface HeaderControlsItem {
  title: React.ReactNode;
  dropdown: React.ReactNode;
  href?: string;
  name: string;
}

export interface CreatorsBlock {
  profession: string;
  person: Person[];
}