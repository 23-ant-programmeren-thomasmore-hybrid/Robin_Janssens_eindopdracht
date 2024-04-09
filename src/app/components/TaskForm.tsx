"use client"

import React, {FormEvent, useState} from 'react';

export function TaskForm() {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const response = await fetch("/api/task/create", {
            method: 'POST',
            body: JSON.stringify({
                title: formData.get('title'),
                description: formData.get('description')
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        const data = await response.json();

        if (response.ok) {
            // Clear any previous errors
            setError(null);
            // Set success message
            setSuccessMessage(data.message);
        } else {
            // Handle error response
            setError(data.error);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            {error && <span className={"text-red-500"}>{error}</span>}
            {successMessage && <span className={"text-green-500"}>{successMessage}</span>}
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
                        name={"description"}
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
