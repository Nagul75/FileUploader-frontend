import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"

import {loginSchema,type loginFields } from "@/form/formSchema"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MoonStar } from "lucide-react"

interface templateProps {
    children: React.ReactNode;
    title: string
}

const SignupLoginTemplate = ({children, title}: templateProps) => {
    return(
        <>
            <div className="min-h-screen min-w-full flex items-center justify-center" style={{
                backgroundColor: "#77aef7",
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%23dbeafe' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`
            }}>
                <div className="flex w-full min-h-110 max-w-2xl h-lg rounded-xl overflow-hidden shadow-2xl bg-white">
                    <div className="h-auto w-[40%] bg-neutral-700 flex flex-col items-center justify-between gap-4 py-12">
                        <h1 className="text-6xl text-white">{title}</h1>
                        <MoonStar size={128} className="text-blue-300" />
                    </div>
                    <div className="h-auto flex-auto w-[60%] bg-[#f5f5f5] flex flex-col space-y-8 py-8 pt-12">{children}</div>
                </div>
            </div>
        </>
    )
}



const Login = () => {
    const form = useForm<loginFields>({resolver: zodResolver(loginSchema), defaultValues: {
        email: "",
        password: "",
    }})

    function onSubmit(data: loginFields) {
        alert(JSON.stringify(data, null, 2))
    }

    return(
        <>
            <SignupLoginTemplate title="Login">
                <div className="px-6 py-3 flex flex-col items-center mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="JohnDoe@email.com" {...field} className="w-80"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )} 
                            />

                            <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" {...field} className="w-80"/>
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )} 
                            />


                            <div className="flex justify-center items-center gap-4">
                                <Button type="submit" className="hover:bg-blue-300 hover:text-black h-12 w-24 bg-black text-white text-xl">Login</Button>
                                <p>Or <a href="/signup" className="text-blue-400 text-xl">Signup</a></p>
                            </div>
                        </form>
                    </Form>
                </div>
            </SignupLoginTemplate>
        </>
    )
}

export default Login

