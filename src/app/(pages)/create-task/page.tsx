// pages/tasks.tsx
"use client"
import React from 'react';
import {TaskForm} from "@/app/components/TaskForm";

export default function CreateTaskPage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <h1 className="text-4xl font-bold mb-4">Tasks</h1>
                <TaskForm/>
            </div>
        </>
    );
}
