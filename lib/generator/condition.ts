export interface Condition {
  key: string;
  description: string;
  url: string;
  type: string;
  isGlobal: boolean;
}

export interface Conditions {
  [key: string]: Condition;
}
