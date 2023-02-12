<!-- Other way using $ -->
<script lang="ts">
  import { count } from '../store/stores';
</script>

<h2>Current count is {$count}</h2>

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
