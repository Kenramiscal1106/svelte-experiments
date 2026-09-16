import { addTask, deleteTask, getAllTasks } from '$lib/layout/task';
import { fail, type Actions } from '@sveltejs/kit';
import * as v from "valibot";
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {
        tasks: await getAllTasks()
    };
}) satisfies PageServerLoad;


export const actions: Actions = {
    addTask: async ({ request }) => {
        const formData = await request.formData();
        const formObject = v.object({
            title: v.pipe(v.string(), v.nonEmpty("Task name's empty af bro")),
            priority: v.pipe(v.number(), v.minValue(1, "Enriqueeee!!!!!!!!"),),
        })
        const parsedFormData = v.safeParse(formObject, {
            title: formData.get("title"),
            priority: parseInt(formData.get("priority") as string)
        })
        console.log(parsedFormData.issues)
        if (parsedFormData.success) {
            await addTask(parsedFormData.output)
        } else {
            return fail(400);
        }
    },
    deleteTask: async ({ request }) => {
        const formData = await request.formData();

        const parsedTaskId = v.safeParse(v.pipe(v.string(), v.uuid()), formData.get("task-id"));
        if (parsedTaskId.success) {
            await deleteTask(parsedTaskId.output)
        } else {
            return fail(400);
        }
    }
};