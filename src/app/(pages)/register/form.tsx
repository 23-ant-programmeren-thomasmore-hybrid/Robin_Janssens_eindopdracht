'use client'
import {FormEvent, useState} from "react";

export default function Form() {
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // reset messages
        setError(null);
        setSuccessMessage(null);

        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/auth/register", {
            method: 'POST',
            body: JSON.stringify({
                email: formData.get('email'),
                password: formData.get('password')
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();

        if (response.ok) {
            // Clear any previous errors
            setError(null);
            // Set success message
            setSuccessMessage(data.message);
        } else {
            // Handle error response
            setError(data.error);
        }
    }
    return (
        <form onSubmit={handleSubmit} className={"flex flex-col gap-2 mx-auto max-w-md pb-2 mt-10"}>
            {error && <span className={"text-red-500"}>{error}</span>}
            {successMessage && <span className={"text-green-500"}>{successMessage}</span>}
            {}
            <label htmlFor={"email"}>Email: </label>
            <input id={"email"} autoComplete={"email"} name={"email"} className={"border border-black text-black"}
                   type={"email"}/>
            <label htmlFor={"password"}>Password: </label>
            <input id={"password"} name={"password"} className={"border border-black text-black"} type={"password"}/>
            <button type={"submit"} className={"hover:bg-gray-700 bg-gray-500 rounded p-1 hover:underline"}>Register
            </button>
        </form>
    )
}

