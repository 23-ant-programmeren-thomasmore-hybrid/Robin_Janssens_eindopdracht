// components/TaskItem.tsx

import React from 'react';

interface Task {
    id: string;
    title: string;
    description: string;
    // Add more fields as needed
}

export function TaskItem({ task }: { task: Task }) {
    return (
        <div>
            {/* Display task details here */}
        </div>
    );
}
