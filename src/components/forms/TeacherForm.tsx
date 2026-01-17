"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
    username: z.string().min(3 , {message: "Username must be at least 3 characters long"}).max(20 , {message: "Username must be at most 20 characters long"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8 , {message: "Password must be at least 8 characters long"}),
    firstName: z.string().min(2 , {message: "First name must be at least 2 characters long"}),
    lastName: z.string().min(2 , {message: "Last name must be at least 2 characters long"}),
    phone: z.string().min(10 , {message: "Phone number must be at least 10 characters long"}),
    address: z.string().min(1 , {message: "Address is required"}),
    birthDay: z.date({message: "Birth date is required"}),
    sex: z.enum(["male", "female"] , {message: "Sex must be either male or female"}),
    img:z.instanceof(File , {message: "Image must be a file"}),
})

const TeacherForm = ({type , data}:{type:"create" | "update", data?:any }) => {
    const {register , handleSubmit , formState:{errors}} = useForm({
        resolver: zodResolver(schema),
    })
  return (
    <div>TeacherForm</div>
  )
}

export default TeacherForm