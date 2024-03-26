"use client"
import React, {useEffect} from 'react';
import {HomePage} from "@/app/components/HomePage";

export default function Home() {
    useEffect(() => {
        // console.log('MyApp useEffect');
        if ('serviceWorker' in navigator) {
            // console.log('Service worker support detected');
            window.addEventListener('load', () => {
                // console.log('Window loaded');
                navigator.serviceWorker
                    .register('../public/service-worker.js')
                    .then((registration) => {
                        console.log('ServiceWorker registration successful:', registration);
                    })
                    .catch((error) => {
                        console.log('ServiceWorker registration failed:', error);
                    });
            });
        } else {
            console.log('Service worker not supported');
        }
    }, []);
    return (
            <HomePage/>
    )
}
