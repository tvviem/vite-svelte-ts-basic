<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  function greet(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    dispatch('greet', 'data-hello-from-inner-comp');
  }
</script>

<button on:click={greet}>Greet</button>
