import {authOptions} from "@/app/lib/auth";
import {getServerSession} from "next-auth";
import {signIn, signOut} from "next-auth/react";

export default async function LoginButton() {
    const session = await getServerSession(authOptions);
    return (
        <button onClick={() => signIn()}>Sign In</button>
        // <div>
        //     {session ? (
        //         <button onClick={() => signOut()}>Sign Out</button>
        //     ) : (
        //         <button onClick={() => signIn()}>Sign In</button>
        //     )}
        // </div>
    );
}