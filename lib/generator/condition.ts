export interface Condition {
  key: string;
  description: string;
  url: string;
  type: string;
  typeOverride?: string[];
  isGlobal: boolean;
}

export interface Conditions {
  [key: string]: Condition;
}
