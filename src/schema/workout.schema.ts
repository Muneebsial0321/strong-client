import { ExerciseBodyPartsEnum, ExerciseCategoryEnum } from "./exercise.schema";

// Exercise Model
export interface Exercise {
  id?: number;
  name: string;
  category: ExerciseCategoryEnum;
  bodyPart: ExerciseBodyPartsEnum;
  createdAt?: Date;
  updatedAt?: Date;
}

// GamePlan Model (Embedded in Workout)
export interface GamePlan {
  exerciseId: number; // References Exercise.id
  howManySets: number;
}

// Workout Model
export interface Workout {
  id?: number;
  name: string;
  desc?: string;
  gamePlan: GamePlan[];
  createdAt?: Date;
  updatedAt?: Date;
}


