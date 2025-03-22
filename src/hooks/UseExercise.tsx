import { useQuery } from "@tanstack/react-query"
import { ExerciseSchmea } from "../schema/exercise.schema"
import useCrud from "./CrudHook.interface"

const UseExercise = () => {
    const { createOne, deleteOne, find, findAll, findById } = useCrud<ExerciseSchmea>("exercises")

    const { data: findAllExercise ,error,isLoading} = useQuery({
        queryKey: ["all-exercises"],
        queryFn: findAll

    })
    return {
        createOne,
        deleteOne,
        find,
        findAll,
        findById,
        findAllExercise,
        isLoading,
        error
    }
}

export default UseExercise