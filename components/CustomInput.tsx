import React from 'react'
import { Form ,FormControl, FormField, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, FieldPath, useForm } from "react-hook-form"
import { authFormSchema } from '@/lib/utils'
import { z } from 'zod'


const formSchema = authFormSchema('sign-in')

interface CustomInput {
  control: Control<z.infer<typeof formSchema>>,
  name: FieldPath<z.infer<typeof formSchema>>,
  label: string,
  placeholder: string
}
const CustomInput = ({control,name,label,placeholder}:CustomInput) => {
  return (
    <FormField
    control={control}
    name={name}
    render={({ field }) => (
      <div className="form-item">
        <FormLabel className="form-label">{label}</FormLabel>
        <div className="w-full flex flex-col">
          <FormControl>
          <Input 
          placeholder={placeholder}
          className="input-class w-full"
          type={name}
          {...field}></Input>
          
          </FormControl>
          <FormMessage className="form-message mt-2"></FormMessage>
        </div>
      </div>
    )}
/>
  )
}

export default CustomInput
