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