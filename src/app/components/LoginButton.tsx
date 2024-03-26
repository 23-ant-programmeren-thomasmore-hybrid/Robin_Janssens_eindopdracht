import {authOptions} from "@/app/lib/auth";
import {getServerSession} from "next-auth";
import {signIn, signOut} from "next-auth/react";

export default async function LoginButton() {
    const session = await getServerSession(authOptions);

    return (
        <div>
            {session ? (
                <>
                    <a className={"bg-gray-500 rounded p-1 hover:underline"} href={"/api/auth/signout"}><span>Sign Out</span></a>
                    {/*// @ts-ignore*/}
                    <span>{session.user.name}</span>
                </>
            ) : (
                <>
                    <a className={"bg-gray-500 rounded p-1 hover:underline"} href={"/api/auth/signin"}><span>Sign In</span></a>
                </>
            )}


        </div>
    );
}

