import Dexie, { Table } from "dexie";
import { ExerciseSchmea } from "./exercise.schema";
import { Workout } from "./workout.schema";

// Dexie Database
class Database extends Dexie {
    exercises!: Table<ExerciseSchmea>;
    workouts!: Table<Workout>;

    constructor() {
        super("SuperDBDexie");
        this.version(1).stores({
            exercises: "++id, name, category, bodyPart",
            workouts: "++id, name, gamePlan",
        });
    }

}

const db = new Database();
type dbTables = keyof typeof db

export { db };
export type { dbTables };

