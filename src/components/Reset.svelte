<script lang="ts">
  import { count } from '../store/stores';

  function reset(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    // step 5: reset store
    count.set(0);
  }
</script>

<button on:click={reset}>Reset</button>
