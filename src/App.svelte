<script lang="ts">
  const num: number = +87;
</script>

<main>
  {#if num === 0}
    <h2>THE NUMBER IS ZERO</h2>
  {:else if num < 0}
    <h2>THE NUMBER IS NAGATIVE</h2>
  {:else if num > 0}
    <h2>THE NUMBER IS POSITIVE</h2>
  {:else}
    <h2>not a number</h2>
  {/if}
</main>

<style>
</style>
