import { command, form, query } from "$app/server";
import { db } from "$lib/server/db";
import * as v from "valibot"
import { task } from "$lib/server/db/schema";
import { eq } from "drizzle-orm";


export const getAllTasks = query(async () => {
    const tasks = await db.select().from(task);
    return tasks;
});

export const addTask = form(
    v.object({
        title: v.pipe(v.string(), v.nonEmpty("Task name's empty af bro")),
        priority: v.pipe(v.number(), v.minValue(1, "Enriqueeee!!!!!!!!"),),
    }), 
    async ({title, priority}) =>{
        await db.insert(task).values([{
            title,
            priority,
            userId: "69e5a1d6-6de7-4011-9c53-1cbd4e1a496e",
        }])
    }
)

export const deleteTask = command(v.pipe(v.string(), v.nonEmpty(), v.uuid()), async(taskId) => {
    await db.delete(task).where(eq(task.id, taskId));
    getAllTasks().refresh();
})