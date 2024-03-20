"use client"
import React, {useEffect} from 'react';

export function HomePage() {
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <div className={"p-4 rounded-lg bg-black flex flex-col items-center justify-center"}>
                    <link
                        rel="apple-touch-icon"
                        sizes="114x114"
                        href="/public/icons/icon-144x144.png"
                        type="image/png"/>

                    <h1 className="text-4xl font-bold mb-4">Task Manager PWA</h1>
                    <p className="text-lg text-white mb-8">
                        Welcome to Task Manager PWA! Organize your tasks efficiently with our progressive web app.
                    </p>
                    <a
                        href="/create-task"
                        className=" m-1 bg-blue-600 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </>
    );
}
