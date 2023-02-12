<script lang="ts">
  import { count } from '../store/stores';

  function increment(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    // step 3: update count value existing in store
    count.update((value) => {
      return value + 1;
    });
  }
</script>

<button on:click={increment}>Increment</button>
