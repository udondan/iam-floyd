export interface Condition {
  key: string;
  description: string;
  url: string;
  type: string;
  typeOverride?: string[];
  isGlobal: boolean;
  relatedActions?: string[];
  relatedResourceTypes?: string[];
}

export type Conditions = Record<string, Condition>;
