<script lang="ts">
    import { getNum } from "@lib/context";

  let count: number = $state(0)
  const increment = () => {
    count += 1
  }
  const ctxCount = getNum()
  const {number, text} = $derived(ctxCount());
</script>

<button type="button" class="counter" onclick={increment}>
  {text} {count} {number}
</button>
