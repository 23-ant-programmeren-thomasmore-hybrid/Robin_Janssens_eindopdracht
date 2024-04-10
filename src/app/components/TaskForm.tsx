'use client'

import {useFormState, useFormStatus} from "react-dom";
import {createTask} from "@/app/lib/actions";
import {useState} from "react";

const initialState = {
    message: "", isPrivate: false
}

function SubmitButton() {
    const {pending} = useFormStatus();

    return (
        <button
            type="submit"
            aria-disabled={pending}
            className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
            Add Task
        </button>
    );
}

export function TaskForm() {
    const [state, setState] = useState(initialState)
    const [formState, formAction] = useFormState(createTask, initialState);

    const getMessageClass = () => {
        return formState.message.startsWith("Failed") ? "text-red-600" : "text-green-600";
    }

    const handleToggleChange = () => {

        setState((prevState) => ({
            ...prevState,
            isPrivate: !prevState.isPrivate,
        }));
    }
    return (
        <form action={formAction} className="w-full max-w-lg">
            {formState.message && (
                <span className={`block mb-2 ${getMessageClass()}`}>{formState.message}</span>
            )}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name={"title"}
                        className="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter task title"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                           htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        name={"description"}
                        className="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Enter task description"
                        rows={4}
                    />
                </div>
                <div className="w-full px-3 mb-6 flex items-center">
                    <input
                        type="checkbox"
                        id="isPrivate"
                        name="isPrivate"
                        checked={state.isPrivate}
                        onChange={handleToggleChange}
                        className="mr-2"
                    />
                    <label htmlFor="isPrivate" className="text-white text-sm">
                        Private Task
                    </label>
                </div>
                <div className="w-full px-3 mb-6">
                    <SubmitButton/>
                </div>
                <p aria-live={"polite"} className={"sr-only"} role={"status"}>
                    {formState?.message}
                </p>
            </div>
        </form>
    )
}