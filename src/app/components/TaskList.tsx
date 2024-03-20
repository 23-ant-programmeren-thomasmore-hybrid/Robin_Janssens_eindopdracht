// "use client"
// // Import necessary libraries and components
//
// // Define TaskList component
// import {useEffect, useState} from "react";
// import {db} from "@/app/firebase";
// // @ts-ignore
// import {collection, getDocs, deleteDoc, doc} from "@firebase/firestore";
// import {FaTrashAlt} from "react-icons/fa";
//
// export type Task = { id: string, title: string, description: string };
//
// export function TaskList() {
//     // Define tasks state
//     const [tasks, setTasks] = useState<any[]>([]);
//
//     // Fetch tasks from firestore
//     useEffect(() => {
//         const fetchTasks = async () => {
//             const tasksSnapshot = await getDocs(collection(db, "tasks"));
//             const tasksData = tasksSnapshot.docs.map((doc: any) => ({...doc.data(), id: doc.id}));
//             setTasks(tasksData);
//         }
//         fetchTasks();
//     }, []); // No dependencies, runs only once when the component mounts
//
//     const handleDeleteTask = async (taskId: string) => {
//         const confirmDelete = window.confirm("Are you sure you want to delete this task?");
//         if (confirmDelete) {
//             try {
//                 await deleteDoc(doc(db, "tasks", taskId));
//                 setTasks(tasks.filter(task => task.id !== taskId));
//             } catch (error) {
//                 console.error("Error deleting task:", error);
//             }
//         }
//     };
//
//     // Render the list of tasks
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//             {tasks.map((task) => (
//                 <div key={task.id} className="relative bg-gray-500 text-white p-4 rounded-lg">
//                     <h3 className="text-lg font-semibold">{task.title}</h3>
//                     <p className="text-sm text-white mt-2">{task.description}</p>
//                     <button
//                         className="absolute top-2 right-2 text-white"
//                         onClick={() => handleDeleteTask(task.id)}
//                     >
//                         <FaTrashAlt/>
//                     </button>
//                 </div>
//             ))}
//         </div>
//     );
// }
