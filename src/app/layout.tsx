import type {Metadata, Viewport} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {getServerSession} from "next-auth";
import Link from "next/link";
import Logout from "@/app/components/Logout";

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
