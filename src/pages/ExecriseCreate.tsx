import { Button, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import { ExerciseCategory } from '../shared/ExerciseCategory'
import { ExerciseBodyParts } from '../shared/ExerciseBodyParts'

const ExecriseCreate = () => {
    return (
        <div className='canvas bg-primary'>


            {/* inputs */}
            <div className="w-[19rem] flex flex-col justify-center -items-center gap-4">

                {/* name */}
                <TextField
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
                    name='category'
                    options={ExerciseCategory}


                />

                {/* category */}
                <SelectComp
                    name='bodyParts'
                    options={ExerciseBodyParts} />


                <Button variant='contained' className='py-3'>Submit</Button>
            </div>
        </div>
    )
}


interface SelectCompProps {
    name: string
    options: string[]
}

const SelectComp: React.FC<SelectCompProps> = ({ name, options }) => {
    return <>
        <InputLabel className='text-white' id={name}>Age</InputLabel>
        <Select
            className='w-full text-white border placeholder-white border-white'
            name={name}
            id={name}

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
            {options.map((e, i) => (<MenuItem  key={i} value={e}>{e}</MenuItem>))}
        </Select>
    </>
}
export default ExecriseCreate