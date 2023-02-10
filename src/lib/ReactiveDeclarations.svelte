<script lang="ts">
  let firstName = 'Viem';
  let lastName = 'Trieu';
  // Reactive Declaration
  $: fullName = `${firstName} ${lastName}`;

  // cart items
  let items = [
    { id: 1, title: 'TV', price: 100 },
    { id: 2, title: 'Phone', price: 200 },
    { id: 3, title: 'Laptop', price: 300 }
  ];
  $: total = items.reduce((total, curr) => (total = total + curr.price), 0);
</script>

<section>
  <input type="text" placeholder="firstname" bind:value={firstName} />
  <input type="text" placeholder="lastname" bind:value={lastName} />
  <h2>{firstName} {lastName}</h2>
  <h2>{fullName}</h2>

  <h2>
    Total - {items.reduce((total, curr) => (total = total + curr.price), 0)}
  </h2>

  <!-- Using declarative for above, optimize loop compute total -->
  <h2>Total - {total}</h2>

  <!-- Add an item into items - NOT CORRECT -->
  <button on:click={() => items.push({ id: 4, title: 'Keyboard', price: 30 })}
    >Add item - NOT Reactive</button
  >

  <button
    on:click={() =>
      (items = [...items, { id: 4, title: 'Keyboard', price: 30 }])}
    >Add item - Reactive</button
  >
</section>

<style>
</style>
