<script lang="ts">
  const name = 'Vinh Nam';
  const htmlString = '<b style="color:red">BOLD TEXT</b>'; // strictly
  const hack = `<a href="#" onclick="alert('You have been hacked!')">Win the prize</a>`; // not use
</script>

<main>
  <h1>Hello {name}</h1>
  <p>HTML BINDING {@html htmlString}</p>
  <h2>{@html hack}</h2>
</main>

<style>
</style>
