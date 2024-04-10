"use server"

import {revalidatePath} from "next/cache";
import postgres from "postgres"
import {z} from "zod";

let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
    ssl: "allow"
});

export async function createTask(
    prevState: {
        message: string
    },
    formData: FormData,
) {
    const schema = z.object({
        title: z.string().min(1),
        description: z.string(),
        isPrivate: z.boolean().nullable()
    });
    const title = formData.get("title");
    const description = formData.get("description");
    let isPrivate = formData.get("isPrivate");

    let boolIsPrivate = false
    if (isPrivate != null) {
        boolIsPrivate = isPrivate === 'on';
    } else {
        boolIsPrivate = false
    }


    const parse = schema.safeParse({
        title: title,
        description: description,
        isPrivate: boolIsPrivate
    });

    if(!parse.success) {
        console.error("Form data validation failed: ", parse.error);
        return {message: "Failed to create task"};
    }

    const data = parse.data;
    console.log("isPrivate: ", isPrivate);
    try {
        console.log('attempting to insert task into database:, ', data);
        await sql`INSERT INTO tasks (title, description, isPrivate)
                  VAlUES (${data.title}, ${data.description}, ${data.isPrivate})`;
        console.log('Task inserted successfully');
        revalidatePath("/tasklist");
        return {message: `Added task ${data.title}`};
    } catch (e) {
        console.error('Error inserting task into database: ', e);
        return {message: "Failed to create task"}
    }
}

export async function deleteTask(
    prevState: {
        message: string;
    },
    formData: FormData,
) {
    const schema = z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        // description: z.string(),
    });
    const data = schema.parse({
        id: formData.get("id"),
        title: formData.get("title"),
        // description: formData.get("description"),
    });

    try{
        await sql`DELETE FROM tasks WHERE id = ${data.id}`;

        revalidatePath("/tasklist");
        return { message: `Deleted task ${data.title}`};
    } catch (e) {
        return { message: "Failed to delete task"}
    }
}