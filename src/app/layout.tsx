import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {getServerSession} from "next-auth";
import Link from "next/link";
import Logout from "@/app/components/Logout";

const APP_NAME = "NextJS PWA Task Manager";
const APP_DEFAULT_TITLE = "NextJS PWA Task Manager";
const APP_TITLE_TEMPLATE = "%s - Task Manager";
const APP_DESCRIPTION = "A NextJS PWA Task Manager!";

export const metadata: Metadata = {
    applicationName: APP_NAME,
    title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    formatDetection: {
        telephone: false,
    },
};

const inter = Inter({subsets: ["latin"]});
export const viewport: Viewport = {
    themeColor: "#10216577",
}
export default async function RootLayout({children,}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession()
    return (
        <html lang="en">
        <body className={inter.className}>
        <nav>
            {!!session && <Logout/>}
            {!session && <Link href="/login">Login</Link>}
        </nav>
        {children}
        </body>
        </html>
    );
}
