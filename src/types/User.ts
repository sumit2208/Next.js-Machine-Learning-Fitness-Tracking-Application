export interface UserProfile {
    id: string;
    email: string;
    displayName?: string;
    age?: number;
    weight?: number;
    height?: number;
    fitnessGoals?: string[];
  }