import { Button } from "@mui/material"
import React from "react"

const Execrises = () => {
  return (
    <div
      className="bg-primary"
    >
  {  [1,1,11,1,1,1,1].map((e)=>(  <ExerciseComp
        name="Bench Press"
        category="Barbell"
        bodyPart="chest"
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