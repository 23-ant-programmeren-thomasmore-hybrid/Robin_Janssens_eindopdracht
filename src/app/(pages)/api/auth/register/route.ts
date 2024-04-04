import {NextResponse} from "next/server";
import {hash} from 'bcrypt';
import {sql} from '@vercel/postgres'
import {validateEmail, validatePassword} from "@/app/lib/validation";

export async function POST(request: Request) {


    try {
        const {email, password} = await request.json();
        //validate email using validateEmail function
        if (!validateEmail(email)) {
            return new Response(JSON.stringify({error: "Email not valid"}), {
                status: 400,
            });
        }
        if (!validatePassword(password)) {
            return new Response(JSON.stringify({error: "Password must be at least 8 characters"}), {
                status: 400
            });
        }
        console.log({email, password});
        // check is email already exists in db
        const existingUser = await sql`SELECT *
                                       FROM users
                                       WHERE email = ${email}`;
        if (existingUser.rowCount > 0) {
            return new Response(JSON.stringify({error: "Email already in use"}), {
                status: 400,
                headers: {'Content-Type': 'application/json'}
            });
        }

        const hashedPassword = await hash(password, 10);

        const response = await sql`
            INSERT INTO users (email, password)
            VALUES (${email}, ${hashedPassword})
        `;

        return NextResponse.json({
            message: {response}
        })

    } catch (e) {
        console.error({e})
        return new Response(JSON.stringify({error: "Internal Server Error"}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        });
    }


}