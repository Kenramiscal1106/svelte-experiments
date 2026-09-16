<script lang="ts">
	import { enhance } from '$app/forms';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<form action="?/addTask" method="POST" use:enhance>
    <input type="text" name="title"/><br/>
    <input type="number" name="priority"/>
    <button>Submit</button>
</form>

<div>
    {#each data.tasks as task (task.id)}
        <div>
            {task.title} - {task.priority} 
            <form action="?/deleteTask" method="POST" use:enhance>
                <input type="text" hidden name="task-id" value={task.id}>
                <button>Delete</button>
            </form>
        </div>
    {/each}
</div>



