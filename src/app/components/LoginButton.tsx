import {authOptions} from "@/app/lib/auth";
import {getServerSession} from "next-auth";
import {signIn, signOut, useSession} from "next-auth/react";
import Link from "next/link";

export default async function LoginButton() {
    // const {data: session} = useSession();
    const session = await getServerSession(authOptions);

    return (
        <>
        {session && (
            <Link href={"/api/auth/signout"} onClick={() => signOut()} className={"btn-signin"}>
                <span>Sign out {session.user?.name}</span>
            </Link>
        )}
            {!session && (
                <Link href={"/api/auth/signin"} onClick={() => signIn()} className={"btn-signin"}>
                    Sign in
                </Link>
            )}
        </>
        // <div>
        //     {session ? (
        //         <>
        //             <a className={"bg-gray-500 rounded p-1 hover:underline"} href={"/api/auth/signout"}><span>Sign Out</span></a>
        //             {/*// @ts-ignore*/}
        //             <span>{session.user.name}</span>
        //         </>
        //     ) : (
        //         <>
        //             <a className={"bg-gray-500 rounded p-1 hover:underline"} href={"/api/auth/signin"}><span>Sign In</span></a>
        //         </>
        //     )}
        // </div>
    );
}

