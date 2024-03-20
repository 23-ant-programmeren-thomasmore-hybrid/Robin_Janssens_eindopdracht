// pages/tasks.tsx
import React from 'react';
import {db} from "@/app/firebase";
// @ts-ignore
import {collection, getDocs} from "@firebase/firestore";
import {DeleteButton} from "@/app/components/DeleteButton";
export const revalidate = 0;
type Task = { id: string, title: string, description: string };

export default async function TaskListPage() {
    const tasksSnapshot = await getDocs(collection(db, "tasks"));
    const tasksData:Task[] = tasksSnapshot.docs.map((doc:any) => ({ ...doc.data(), id: doc.id }));
    return (
        <div className="flex flex-col min-h-screen py-2">
            <h1 className="text-4xl font-bold mb-4">Tasks</h1>
            {/*<TaskList />*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {tasksData.map((task) => (
                    <div key={task.id} className="relative bg-gray-500 text-white p-4 rounded-lg">
                        <h2 className="text-lg font-semibold">{task.title}</h2>
                        <p className="text-sm text-white mt-2">{task.description}</p>
                        <DeleteButton taskId={task.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
