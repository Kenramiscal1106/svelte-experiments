<script lang="ts">
	import { onMount } from 'svelte';

	let open = $state(true);
	onMount(() => {
		const interval = setInterval(() => {
			open = !open;
		}, 1000);
		return () => {
			clearInterval(interval);
		};
	});
	let count = 5;
</script>

<div
	class="wipe-container fixed top-0 left-0 flex h-screen w-screen items-stretch justify-stretch {open
		? 'wipe-container--open'
		: 'wipe-container--close'}"
>
	{#each Array(count) as _, i}
		<div style:transition-delay="{i * 100}ms"></div>
	{/each}
</div>

<style lang="postcss">
	@reference "tailwindcss";
	.wipe-container--open > */* :nth-child(even) */ {
		@apply -translate-y-full;
	}
	/* .wipe-container--open > *:nth-child(odd) {
		@apply -translate-x-full;
	} */
	.wipe-container > * {
		@apply pointer-events-none grow bg-blue-500 transition-transform duration-500;
	}
</style>
