// components/DeleteButton.tsx

import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';

interface Props {
    taskId: string;
}

export function DeleteButton({ taskId }: Props) {
    const [isLoading, setIsLoading] = useState(false);

    const handleDelete = async () => {
        setIsLoading(true);
        try {
            // console.log(taskId)
            const response = await fetch('/api/task/delete', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: taskId, // Pass taskId in the request body
            });
            if (response.ok) {
                // Optionally, handle success, e.g., show a confirmation message
            } else {
                console.error('Failed to delete task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <button
            aria-label="Delete task"
            className="absolute top-2 right-2 text-red-500"
            onClick={handleDelete}
            disabled={isLoading}
        >
            <FaTrashAlt />
        </button>
    );
}
