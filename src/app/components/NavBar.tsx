"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import LoginButton from "@/app/components/LoginButton";

export function NavBar() {
    const pathname = usePathname()
    return (
        <>
            <nav className={"flex flex-row justify-center gap-8"}>
                <Link className={`link ${pathname === "/" ? "bg-gray-500 rounded p-1" : ""} hover:underline`} href="/">
                    Home
                </Link>
                <Link className={`link ${pathname === "/create-task" ? "bg-gray-500 rounded p-1" : ""} hover:underline`}
                      href="/create-task">
                    Create Task
                </Link>
                <Link className={`link ${pathname === "/tasklist" ? "bg-gray-500 rounded p-1" : ""} hover:underline`}
                      href="/tasklist">
                    Task List
                </Link>
                {/*<Link className={`link ${pathname === "/contact" ? "bg-purple-600 rounded p-1" : ""} hover:underline`}*/}
                {/*      href="/contact">*/}
                {/*    Contact*/}
                {/*</Link>*/}
                {/*<Link className={`link ${pathname === "/coming-soon" ? "bg-purple-600 rounded p-1" : ""} hover:underline`}*/}
                {/*      href="/coming-soon">*/}
                {/*    Coming soon*/}
                {/*</Link>*/}
            </nav>
            <LoginButton/>
        </>
    );
}