// pages/tasks.tsx
import React from 'react';
import {TaskForm} from "@/app/components/TaskForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";
import {redirect} from "next/navigation";

export default async function CreateTaskPage() {
    const session = await getServerSession();
    if(!session) {
        redirect("/login")
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">Tasks</h1>
                <TaskForm/>
            </div>
        </>
    );
}
