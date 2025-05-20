import {z} from "zod"

const signupSchema = z.object({
    username: z.string().min(3).max(30),
    fullname: z.string().min(3).max(30),
    password: z.string().min(3),
    passwordConfirmation: z.string().min(3),
    email: z.string().email()
})

const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3)
})

type signupFields = z.infer<typeof signupSchema>
type loginFields = z.infer<typeof loginSchema>

export  {
    signupSchema,
    loginSchema,
    type signupFields,
    type loginFields
}