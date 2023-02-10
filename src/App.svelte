<script lang="ts">
  let count = 0;

  const increment = (event: MouseEvent) => {
    count += 1;
    console.log(event);
  };
  const incSteps = (event: MouseEvent, steps: number) => {
    count += steps;
    console.log(event);
  };
  // prototype
  // const increment1 = (
  //   event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  // ) => {
  //   throw new Error('Function not implemented.');
  // };
</script>

<main>
  <button on:click={() => count++}>way A - Count {count}</button>
  <button on:click={increment}>way B - Count {count}</button>
  <button on:click={(e) => increment(e)}>way C - Count {count}</button>
  <button on:click={(e) => incSteps(e, 3)}>way D - Count + steps {count}</button
  >
</main>

<style>
</style>
