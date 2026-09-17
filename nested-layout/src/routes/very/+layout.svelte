<script lang="ts">
    import { page } from "$app/state";
    import type { LayoutProps } from "./$types";

    let { data, children }: LayoutProps = $props();
    $inspect(page.data);
</script>

<div class="p-12 border-2 border-black">
    <!-- {page.data} -->
    {@render children()}
</div>
