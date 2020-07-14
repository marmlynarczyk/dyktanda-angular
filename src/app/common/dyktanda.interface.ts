export interface Dyktando {
  added: Date;
  author: string;
  classNum: string;
  comments: string;
  content: string;
  dLength: "short" | "middle" | "long";
  tests: "u" | "z" | "h" | "all";
  title: string;
  userUid: string;
  id?: string;
}
