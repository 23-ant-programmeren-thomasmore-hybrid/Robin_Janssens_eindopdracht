import {DeleteForm} from "@/app/components/DeleteForm";
import postgres from "postgres";
let sql = postgres(process.env.DATABASE_URL || process.env.POSTGRES_URL!, {
    ssl: "allow"
})
export async function TaskList() {
    let tasks = await sql`SELECT * FROM tasks`;
        return (
        <div className="mx-auto min-h-screen">
            {/*{error && <span className="text-red-500">{error}</span>}*/}
            <h1 className="text-2xl font-bold mb-4">Task List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task: any) => (
                    <div key={task.id} className="bg-gray-100 rounded-lg shadow-md p-4 mb-4 relative">
                        <h2 className="text-lg text-black font-semibold">{task.title}</h2>
                        <p className="mt-2 text-gray-700">{task.description}</p>
                        <DeleteForm id={task.id} title={task.title}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
