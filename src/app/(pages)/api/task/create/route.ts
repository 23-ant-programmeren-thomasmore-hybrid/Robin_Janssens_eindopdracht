import {sql} from "@vercel/postgres";
import {NextResponse} from "next/server";

export async function POST(request: Request) {
    try {
        const {title, description} = await request.json();
        if (!title) {
            return new Response(JSON.stringify({error: "Title may not be empty"}), {
                status: 400,
            });
        }
        console.log({title, description});

        await sql`INSERT INTO tasks (title, description)
                  VAlUES (${title}, ${description})`;

        return NextResponse.json({
            message: "success"
        })

    } catch (e) {
        console.error({e});
        return new Response(JSON.stringify({error: "Internal Server Error"}), {
            status: 500,
            headers: {'Content-Type': 'application/json'}
        });
    }
}