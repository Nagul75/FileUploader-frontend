import {Input} from "../ui/input.tsx"
import {useFormContext} from "react-hook-form"

interface FormInputProps {
    name: string;
    label: string;
    placeholder?: string;
    error?: string,
    type?: "text" | "password" | "email" | "date" | "time" | "number";
}

export const FormInput = ({name, label, placeholder, type = "text", error} : FormInputProps) => {
    const {register} = useFormContext()

    return(
        <div className="flex items-center gap-4">
            <p className="block w-70">{label}</p>
            <Input
             {...register(name)}
             type={type}
             placeholder={placeholder}
             className="w-80"
            />
            <div className="">
            
            </div>
        </div>
    )
}
