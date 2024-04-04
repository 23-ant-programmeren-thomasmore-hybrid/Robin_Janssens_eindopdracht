'use client'
import {FormEvent} from "react";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

export default function Form() {
    const router = useRouter();
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })

        console.log({response});
        if(!response?.error) {
            router.push("/");
            router.refresh();
        }
    }
    return (
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2 mx-auto max-w-md pb-2 mt-10"}>
            <label htmlFor={"email"}/>
            <input id={"email"} autoComplete={"email"} name={"email"} className={"border border-black text-black"}
                   type={"email"}/>
            <label htmlFor={"password"}/>
            <input id={"password"} name={"password"} className={"border border-black text-black"} type={"password"}/>
            <button type={"submit"} className={"hover:bg-gray-700 bg-gray-500 rounded p-1 hover:underline"}>Login
            </button>
        </form>
    )
}