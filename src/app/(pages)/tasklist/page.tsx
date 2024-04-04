// pages/tasks.tsx
import React from 'react';
// @ts-ignore
import {getServerSession} from "next-auth";
import {TaskList} from "@/app/components/TaskList";
import {redirect} from "next/navigation";

export const revalidate = 0;
type Task = { id: string, title: string, description: string };

export default async function TaskListPage() {
    const session = await getServerSession();
    if(!session) {
        redirect("/login")
    }
    return (
        <>
        </>
    );
}
