<script>
	import { addTask, deleteTask, getAllTasks } from "$lib/remote/task.remote";

</script>

<form {...addTask}>
    <input {...addTask.fields.title.as("text")} />
    {#each addTask.fields.title.issues() as issues}
        {issues.message}
    {/each}<br/>
    <input {...addTask.fields.priority.as("number")} />
    {#each addTask.fields.priority.issues() as issues}
        {issues.message}
    {/each}
    <button>Submit</button>
</form>
<div>
    {#each await getAllTasks() as task}
        <div>
            {task.title} - {task.priority} <button onclick={() => deleteTask(task.id)}>Delete</button>
        </div>
    {/each}
</div>


<style>
    input:user-invalid {
        border:1px solid rgb(255, 0, 0);
    }
</style>