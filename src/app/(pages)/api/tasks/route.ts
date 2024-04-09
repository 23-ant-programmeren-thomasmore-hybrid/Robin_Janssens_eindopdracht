import {sql} from '@vercel/postgres'
import {NextResponse} from "next/server";

export async function GET(req: Request) {
    try {
        const tasks = await sql`SELECT * FROM tasks`;
        console.log({tasks})
        return NextResponse.json(tasks.rows)
        } catch (e) {
        console.error({e});
    }
}