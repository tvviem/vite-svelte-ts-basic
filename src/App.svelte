<script lang="ts">
  // Array
  const names = ['Bruce', 'Clark', 'Diana'];
  // List objects
  const fullNames = [
    { first: 'Bruce', last: 'Wayne' },
    { first: 'Clark', last: 'Kent' },
    { first: 'Princess', last: 'Diana' }
  ];
</script>

<main>
  {#each fullNames as name, index}
    <h2>{index + 1} {name.first} {name.last}</h2>
  {/each}

  {#each names as name, index}
    <h2>{index + 1} {name}</h2>
  {/each}
</main>

<style>
</style>
