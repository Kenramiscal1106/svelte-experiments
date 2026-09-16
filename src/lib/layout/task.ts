import { db } from "$lib/server/db";
import { task } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";


export const getAllTasks = async () => {
    const tasks = await db.select().from(task);
    return tasks;
}

export const addTask = async ({ title, priority }: {
    title: string,
    priority: number
}) => {
    await db.insert(task).values([{
        title,
        priority,
        userId: "69e5a1d6-6de7-4011-9c53-1cbd4e1a496e",
    }])
}

export const deleteTask = async (taskId: string) => {
    await db.delete(task).where(eq(task.id, taskId));
}