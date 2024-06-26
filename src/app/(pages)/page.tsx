import React from 'react';
import {HomePage} from "@/app/components/HomePage";
import Head from "next/head";
export default function Home() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta
                    name="viewport"
                    content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
                />
                <meta name="description" content="Description" />
                <meta name="keywords" content="Keywords" />
                <title>Next.js PWA Example</title>

                <link rel="manifest" href="/manifest.json" />
                <link
                    href="/icons/icons8-reminders-64.png"
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                />
                <link
                    href="/icons/icons8-reminders-64.png"
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                />
                {/*<link rel="apple-touch-icon" href="/apple-icon.png"></link>*/}
                <meta name="theme-color" content="#10216577" />
            </Head>
            <HomePage/>
        </>
    )
}
