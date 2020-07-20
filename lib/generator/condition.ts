interface Condition {
  key: string;
  description: string;
  url: string;
  type: string;
  isGlobal: boolean;
}

interface Conditions {
  [key: string]: Condition;
}
