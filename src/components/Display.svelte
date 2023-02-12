<!-- Other way using $ -->
<script lang="ts">
  import { count, customCount } from '../store/stores';
</script>

<h2>Current count is {$count}</h2>

<h2>The custom count is {$customCount}</h2>
<!-- USING CUSTOM STORE -->
<button on:click={() => customCount.increment()}>Increment 1</button>
<button on:click={() => customCount.increment(5)}>Increment +5</button>
<button on:click={() => customCount.decrement()}>Decrement 1</button>
<button on:click={() => customCount.decrement(5)}>Decrement -5</button>
<button on:click={customCount.reset}>Reset</button>
<!-- <script lang="ts">
  import { onDestroy } from 'svelte';
  import { count } from '../store/stores';
  let counter: number;
  // step 2
  const unsubscribe = count.subscribe((value) => {
    counter = value;
  });
  // For free memory when component unmount
  onDestroy(unsubscribe);
</script>

<h2>Current count is {counter}</h2> -->
