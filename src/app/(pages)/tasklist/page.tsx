// pages/tasks.tsx
import React from 'react';
// @ts-ignore
import {DeleteButton} from "@/app/components/DeleteButton";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/lib/auth";
import {TaskList} from "@/app/components/TaskList";

export const revalidate = 0;
type Task = { id: string, title: string, description: string };

export default async function TaskListPage() {
    const session = await getServerSession(authOptions)
    return (
        <>
            <div className={"flex flex-col min-h-screen py-2 justify-center"}>
                <h1 className="text-4xl font-bold mb-4">Tasks</h1>
                {session ? (
                    <TaskList/>
                ) : (
                    <a className={"m-1 bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded "}
                       href={"/api/auth/signin"}><span>Please sign in to view tasks.</span></a>
                )}
            </div>
        </>
    );
}
