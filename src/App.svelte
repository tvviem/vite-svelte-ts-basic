<script lang="ts">
  import Button from './components/forward-events/Button.svelte';
  import Outer from './components/forward-events/Outer.svelte';

  function handleGreet(e: CustomEvent<any>): void {
    alert('evt from deeply nested compo---' + e.detail); // get data from child component to show
  }
</script>

<main>
  <!-- data got from children Inner, handle in parent App -->
  <Outer on:greet={handleGreet} />
  <Button on:click={() => alert('Clicked on Button Compo')} />
</main>

<style>
</style>
