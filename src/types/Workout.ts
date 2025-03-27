export interface Workout {
    id: string;
    type: 'Strength' | 'Cardio' | 'HIIT' | 'Flexibility';
    duration: number;
    intensity: number;
    calories: number;
    userId: string;
    createdAt: Date;
  }