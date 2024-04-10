'use client'
import { FaTrashAlt } from 'react-icons/fa';
import {useFormState, useFormStatus} from "react-dom";
import {deleteTask} from "@/app/lib/actions";
const initialState = {
    message: "",
};

function DeleteButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type={"submit"}
            aria-disabled={pending}
            aria-label="Delete task"
            className="absolute top-2 right-2 text-red-500"
        >
            <FaTrashAlt/>
        </button>
    )
}

export function DeleteForm({id, title}: { id: number; title: string;}) {
    const [state, formAction] = useFormState(deleteTask, initialState);
    return (
        <>
        <form action={formAction}>

            <input type={"hidden"} name={"id"} value={id}/>
            <input type={"hidden"} name={"title"} value={title}/>
            <DeleteButton/>
            <p aria-live={"polite"} className={"sr-only"} role={"status"}>
                {state?.message}
            </p>
        </form>
            </>
    );
}
