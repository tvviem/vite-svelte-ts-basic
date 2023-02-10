<script lang="ts">
  import Greet from './components/Greet.svelte';
  const name = 'ViemTrieu';
  const obj = {
    name: 'viem',
    heroName: 'Flash'
  };
</script>

<main>
  <Greet name="Bruce" heroName="Batman" />
  <Greet name="Clark" heroName="Superman" />
  <Greet name="Diana" heroName="Wonder Woman" />
  <Greet {name} />
  <!-- Spread obj to pass props for childcomponent -->
  <Greet {...obj} />
</main>

<style>
</style>
