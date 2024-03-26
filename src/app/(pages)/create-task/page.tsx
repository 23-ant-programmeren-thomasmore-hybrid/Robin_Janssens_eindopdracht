// pages/tasks.tsx
"use client"
import React from 'react';
import {TaskForm} from "@/app/components/TaskForm";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";

export default async function CreateTaskPage() {
    const session = await getServerSession(authOptions);
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">Tasks</h1>
                {session ? (
                    <TaskForm/>
                ) : (
                    <a className={"m-1 bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"} href={"/api/auth/signin"}><span>Please sign in to create a new task.</span></a>
                )}
            </div>
        </>
    );
}
