import { Table } from "dexie";
import { db, dbTables } from "../schema/db.config";


// Interface with updated method signatures
export interface CrudHook<T> {
    createOne: (payload: T) => Promise<void>;
    find: (query: Partial<T>) => Promise<T[] | undefined>;
    findAll: () => Promise<T[]>;
    findById: (id: number) => Promise<T | undefined>;
    deleteOne: (id: number) => Promise<void>;
}

const useCrud = <T>(tableName: dbTables): CrudHook<T> => {
    return {
        createOne: async (payload) => {
            try {
                return await (db[tableName] as Table<T>).add(payload);
            } catch (error) {
                console.error(`Error in createOne | Table: ${tableName}`, error);
            }
        },

        find: async (query) => {
            try {
                return await (db[tableName] as Table<T>).where(query).toArray();
            } catch (error) {
                console.error(`Error in find | Table: ${tableName}`, error);
            }
        },

        findAll: async () => {
            try {
                return await (db[tableName] as Table<T>).toArray();
            } catch (error) {
                console.error(`Error in findAll | Table: ${tableName}`, error);
                return []; // Return an empty array on failure
            }
        },

        findById: async (id) => {
            try {
                return await (db[tableName] as Table<T>).get(id);
            } catch (error) {
                console.error(`Error in findById | Table: ${tableName}`, error);
            }
        },

        deleteOne: async (id) => {
            try {
                await (db[tableName] as Table<T>).delete(id);
            } catch (error) {
                console.error(`Error in deleteOne | Table: ${tableName}`, error);
            }
        },
    };
};


export default useCrud;

