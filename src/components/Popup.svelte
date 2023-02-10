<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  export let color = 'blue';
</script>

<div style="background-color: {color};">
  <h2>This is Popup component</h2>
  <button on:click={() => dispatch('close', 'data-from-child')}
    >Close Popup</button
  >
</div>

<style>
</style>
