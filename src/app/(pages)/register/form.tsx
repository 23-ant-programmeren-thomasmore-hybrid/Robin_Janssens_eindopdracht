'use client'
import {FormEvent} from "react";

export default function Form() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            })
        })
    }
    return (
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2 mx-auto max-w-md pb-2 mt-10"}>
            <label htmlFor={"email"}/>
            <input id={"email"} autoComplete={"email"} name={"email"} className={"border border-black text-black"} type={"email"}/>
            <label htmlFor={"password"}/>
            <input id={"password"} name={"password"} className={"border border-black text-black"} type={"password"}/>
            <button type={"submit"} className={"hover:bg-gray-700 bg-gray-500 rounded p-1 hover:underline"}>Register
            </button>
        </form>
    )
}