<script lang="ts">
  let names = ['Bruce', 'Clark', 'Diana', 'Barry'];
  const shuffleNames = (
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) => {
    names = names.sort(() => Math.random() - 0.5); // Random array
  };
</script>

<main>
  <!-- Using key expression (name) for adding and removing exactly -->
  {#each names as name (name)}
    <h2>{name}</h2>
    <input placeholder="Last name" />
  {/each}
  <div>
    <button on:click={shuffleNames}>Shuffle!</button>
  </div>
</main>

<style>
</style>
