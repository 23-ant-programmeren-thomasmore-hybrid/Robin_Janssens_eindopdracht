"use client";
import {FaTrashAlt} from "react-icons/fa";
import {useEffect, useState} from "react";
import {db} from "@/app/firebase";
import {collection, getDocs, deleteDoc, doc} from "@firebase/firestore";
// Fetch tasks from firestore
export const revalidate = 0;

export function DeleteButton({taskId}: { taskId: string }) {
    const [tasks, setTasks] = useState<any[]>([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const tasksSnapshot = await getDocs(collection(db, "tasks"));
            const tasksData = tasksSnapshot.docs.map((doc: any) => ({...doc.data(), id: doc.id}));
            setTasks(tasksData);
        }
        fetchTasks();
    }, []); // No dependencies, runs only once when the component mounts

    const handleDeleteTask = async (taskId: string) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this task?");
        if (confirmDelete) {
            try {
                await deleteDoc(doc(db, "tasks", taskId));
                setTasks(tasks.filter(task => task.id !== taskId));
                // Refresh the page
                location.reload();
            } catch (error) {
                console.error("Error deleting task:", error);
            }
        }
    };
    return (
        <button
            aria-label={"Delete task"}
            className="absolute top-2 right-2 text-white"
            onClick={() => handleDeleteTask(taskId)}
        >
            <FaTrashAlt/>
        </button>
    );
}