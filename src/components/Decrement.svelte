<script lang="ts">
  import { count } from '../store/stores';

  function decrement(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    // step 4: update count value in store
    count.update((value) => {
      return value - 1;
    });
  }
</script>

<button on:click={decrement}>Increment</button>
