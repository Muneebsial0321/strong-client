// Enums
export enum ExerciseCategoryEnum {
  Barbell = "Barbell",
  Dumbbell = "Dumbbell",
  Machine = "Machine",
  BodyWeight = "Body Weight",
}

export enum ExerciseBodyPartsEnum {
  Chest = "Chest",
  Back = "Back",
  Shoulders = "Shoulders",
  Biceps = "Biceps",
  Triceps = "Triceps",
  Legs = "Legs",
  Glutes = "Glutes",
  Core = "Core",
  Abs = "Abs",
  Calves = "Calves",
  Forearms = "Forearms",
  FullBody = "FullBody",
}

// Exercise Type
export interface ExerciseSchmea {
  id?: number; // Auto-incrementing primary key
  name: string;
  category: ExerciseCategoryEnum;
  bodyPart: ExerciseBodyPartsEnum;
  createdAt?: Date;
  updatedAt?: Date;
}


