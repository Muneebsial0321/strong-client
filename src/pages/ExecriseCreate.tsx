// @ts-nocheck
import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ExerciseCategory } from '../shared/ExerciseCategory'
import { ExerciseBodyParts } from '../shared/ExerciseBodyParts'
import UseExercise from '../hooks/UseExercise'

const ExecriseCreate = () => {
    const { createOne } = UseExercise()
    const [exercise, setExercise] = useState()
    const __onchange__ = (e) => { setExercise((prev) => ({ ...prev, [e.target.name]: e.target.value })) }
    const __submit__ =async (e) => {
        console.log({ exercise });
        const data = await createOne(exercise!)
        console.log({data});
        

    }
    return (
        <div className='canvas bg-primary'>


            {/* inputs */}
            <div className="w-[19rem] flex flex-col justify-center -items-center gap-4">

                {/* name */}
                <TextField
                    onChange={__onchange__}
                    className='w-full bg-sec text-white placeholder-white'
                    placeholder='Add Name'
                    name="name"
                    variant="outlined"
                    sx={{
                        input: { color: "white" }, // Text color white
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": { borderColor: "white" }, // White border
                            "&:hover fieldset": { borderColor: "white" }, // White border on hover
                            "&.Mui-focused fieldset": { borderColor: "white" }, // White border when focused
                        },
                        "& .MuiInputBase-input::placeholder": { color: "white", opacity: 1 }, // White placeholder color
                    }}
                />

                {/* category */}
                <SelectComp
                    onChange={__onchange__}
                    name='category'
                    options={ExerciseCategory}


                />

                {/* category */}
                <SelectComp
                    onChange={__onchange__}
                    name='bodyParts'
                    options={ExerciseBodyParts} />


                <Button onClick={__submit__} variant='contained' className='py-3'>Submit</Button>
            </div>
        </div>
    )
}


interface SelectCompProps {
    name: string
    options: string[]
    onChange: (e) => void
}

const SelectComp: React.FC<SelectCompProps> = ({ name, options, onChange }) => {
    return <>
        <InputLabel className='text-white' id={name}>Age</InputLabel>
        <Select
            className='w-full text-white border placeholder-white border-white'
            name={name}
            id={name}
            onChange={onChange}

            sx={{
                color: "white", // Text color white
                "& .MuiSelect-select": {
                    color: "white", // Ensures selected text is white
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // White border
                },
                "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // White border on hover
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white", // White border when focused
                },
            }}
        >
            {options.map((e, i) => (<MenuItem key={i} value={e}>{e}</MenuItem>))}
        </Select>
    </>
}
export default ExecriseCreate