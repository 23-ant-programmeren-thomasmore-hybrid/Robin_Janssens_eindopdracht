import {NextResponse} from "next/server";
import {hash} from 'bcrypt';
import {sql} from '@vercel/postgres'
import {validateEmail, validatePassword} from "@/app/lib/validation";

export async function POST(request: Request) {


    try{
        const {email, password} = await request.json();
        //validate email using validateEmail function
        if (!validateEmail(email)) {
            return new Response("Invalid email", {status: 400});
        }
        if (!validatePassword(password)) {
            return new Response("Password must be at least 6 characters long", {status: 400})
        }
        console.log({email, password});

        const hashedPassword = await hash(password, 10);

        const response = await sql`
            INSERT INTO users (email, password)
            VALUES (${email}, ${hashedPassword})
        `;

    }catch (e) {
        console.error({e})
    }

    return NextResponse.json({
        message: "success"
    })
}