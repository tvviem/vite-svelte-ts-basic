<script lang="ts">
  import { getContext } from 'svelte';

  const userName = getContext('uname-context');
</script>

<h2>CompD</h2>
<h3>userName-context from App component:</h3>
<p style="color: red;">{userName}</p>
