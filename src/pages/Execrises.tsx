import { Button } from "@mui/material"
import React, { useEffect, useState } from "react"
import UseExercise from "../hooks/UseExercise"
import { ExerciseSchmea } from "../schema/exercise.schema"

const Execrises = () => {
  const { findAll } = UseExercise()
  const [exercises, setExercises] = useState<Partial<ExerciseSchmea>[]>([])
  const exe = async () => {
    const data = await findAll()
    setExercises(data)
  }
  useEffect(() => { exe() }, [])
  return (
    <div
      className="bg-primary mt-20"
    >
      {exercises && exercises.map((e, i) => (
        <ExerciseComp
          key={i}
          name={e.name}
          category={e.category}
          bodyPart={e.bodyPart}
        />))}

    </div>
  )
}

interface ExerciseCompProps {
  name?: string
  category?: string
  bodyPart?: string
}
const ExerciseComp: React.FC<ExerciseCompProps> = ({ name, category, bodyPart }) => {
  return (
    <div className="w-full my-3 flex items-center justify-between rounded-2xl py-3 px-7 text-white hover:shadow-lg transition-all">

      <div className="left w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
        🏋️‍♂️ {/* Add an icon or replace with an actual image */}
      </div>

      {/* Right Side (Text Content) */}
      <div className="right flex flex-col flex-grow px-4">
        <p className="sm:text-lg text-base font-semibold">
          {name} <span className="text-sm text-gray-300">({category})</span>
        </p>
        <p className="text-sm text-gray-400">{bodyPart}</p>
      </div>

      {/* Button Section */}
      <div>
        <Button
          variant="contained"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md sm:px-4 sm:py-2 max-sm:text-sm transition"
        >
          Add
        </Button>
      </div>

    </div>
  );
};

export default Execrises