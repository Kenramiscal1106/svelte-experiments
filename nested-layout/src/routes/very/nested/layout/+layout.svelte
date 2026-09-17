<script lang="ts">
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
</script>

<div class="p-12 border-2 border-black">
    {@render children()}
</div>
