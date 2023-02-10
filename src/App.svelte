<script lang="ts">
  import { setContext } from 'svelte';
  import CompB from './components/CompB.svelte';

  const userName = 'tvviem87';
  setContext('uname-context', userName);
</script>

<main>
  <h2>userName in rootComponent {userName}</h2>
  <CompB />
</main>

<style>
</style>
