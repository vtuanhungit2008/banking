"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
 
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
const AuthForm = ({type}:{type:string}) => {
    const [user,setUser] = useState("");
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }
  return (
    <section>
    <header className='flex flex-col gap-5 md:gap-8'>
    <Link href="/" className="cursor-pointer flex items-center gap-1">
      <Image
        src="/icons/logo.svg"
        width={34}
        height={34}
        alt="Horizon logo"
      />
      <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">Horizon</h1>
    </Link>

    <div className="flex flex-col gap-1 md:gap-3">
      <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
        {user 
          ? 'Link Account'
          : type === 'sign-in'
            ? 'Sign In'
            : 'Sign Up'
        }
        <p className="text-16 font-normal text-gray-600">
          {user 
            ? 'Link your account to get started'
            : 'Please enter your details'
          }
        </p>   
      </h1>
    </div>
</header>
      {user?(
        <div className="flex flex-col gap-4">
          
        </div>
      ):(
        <>
          <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
        </>
      )
      }
</section>
  )
  
}

export default AuthForm