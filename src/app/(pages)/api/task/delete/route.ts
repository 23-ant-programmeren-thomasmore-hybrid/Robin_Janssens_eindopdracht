// api/tasks/delete.ts

import {sql} from '@vercel/postgres';
import {NextApiRequest, NextApiResponse} from 'next';

export default async function deleteTask(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        try {
            const { taskId } = req.body;
            console.log('Received taskId:', taskId); // Log taskId to console

            if (!taskId) {
                return res.status(400).json({ error: 'Task ID is required' });
            }

            // You can also return the taskId in the response for verification purposes
            return res.status(200).json({
                message: 'Received taskId successfully',
                taskId: taskId,
            });
        } catch (e) {
            console.error({ e });
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
