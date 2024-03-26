// components/TaskForm.tsx

import React, { useState } from 'react';
import 'firebase/firestore';
import {db} from "@/app/firebase";
// @ts-ignore
// import {addDoc, collection} from "@firebase/firestore";
// import {addDoc, collection} from "@firebase/firestore";
// const taskCollectionRef = collection(db, 'tasks')




export function TaskForm() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const taskData = { title, description };

        try {
            // Add task data to Firestore collection
            // await addDoc(taskCollectionRef, taskData);
            // // @ts-ignore
            // confirm('Task added successfully:', taskData.title);
            // setTitle('');
            // setDescription('');
            // redirect to tasks page
            location.href = '/tasklist';
        } catch (error) {
            console.error('Error adding task:', error);
            // Handle error (e.g., show error message to the user)
        }

    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        placeholder="Enter task title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        id="description"
                        className="appearance-none block w-full bg-gray-100 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        placeholder="Enter task description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={4}
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Task
                    </button>
                </div>
            </div>
        </form>
    );
}
