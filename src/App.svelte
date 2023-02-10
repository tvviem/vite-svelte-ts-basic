<script lang="ts">
  import Popup from './components/Popup.svelte';
  let showPopup = false;
  let showPopup1 = false;

  // get data from child component dispatch event
  function closePopup(event: { detail: any }) {
    showPopup1 = false;
    console.log(event.detail); // show data from child component
  }
</script>

<main>
  <button on:click={() => ((showPopup = true), (showPopup1 = true))}
    >Show Popup component</button
  >
  {#if showPopup}
    <Popup on:close={() => (showPopup = false)} color="lightseagreen" />
  {/if}
  {#if showPopup1}
    <Popup on:close={closePopup} color="brown" />
  {/if}
</main>

<style>
</style>
