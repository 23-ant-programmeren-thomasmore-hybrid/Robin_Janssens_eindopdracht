'use client'
import React, { useState, useEffect } from 'react';
import {sql} from "@vercel/postgres";
import {DeleteButton} from "@/app/components/DeleteButton";

export function TaskList() {
    const [tasks, setTasks] = useState<any[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchTasks() {
            try {
                const response = await fetch('/api/tasks');
                if (!response.ok) {
                    throw new Error('Failed to fetch tasks');
                }
                const data = await response.json();
                setTasks(data);
            } catch (error) {
                setError((error as Error).message);
            }
        }
        fetchTasks();
    }, []);

    // Function to handle task deletion
    return (
        <div className="mx-auto min-h-screen">
            {error && <span className="text-red-500">{error}</span>}
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task: any) => (
                    <div key={task.id} className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 relative">
                        <h2 className="text-lg text-black font-semibold">{task.title}</h2>
                        <p className="mt-2 text-gray-700">{task.description}</p>
                        <DeleteButton taskId={task.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
