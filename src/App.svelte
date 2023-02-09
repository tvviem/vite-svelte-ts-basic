<script lang="ts">
  const name = 'Vinh Nam';
  const htmlString = '<b style="color:red">BOLD TEXT</b>'; // strictly
  const hack = `<a href="#" onclick="alert('You have been hacked!')">Win the prize</a>`; // not use
  const id = 'heading'; // auto same attribute
  const disabled = true;
  const status = 'success';
  const isPromoted = true;
  const promoted = true; // for shortstyle
</script>

<main>
  <!-- <h1>Hello {name}</h1>
  <p>HTML BINDING {@html htmlString}</p>
  <h2>{@html hack}</h2>
  <h2 {id}>This is a heading</h2>
  <button {disabled}>BindAttr</button> -->
  <h2 class="underline">Underlined text</h2>
  <h2 class={status}>STATUS</h2>
  <h2 class={isPromoted ? 'promoted' : ''}>Movie title</h2>
  <h2 class:promoted={isPromoted}>Movie title using directive class css</h2>
  <h2 class:promoted>Movie title using directive class css - SHORT style</h2>
</main>

<style>
  .underline {
    text-decoration: underline;
  }
  .danger {
    color: red;
  }
  .success {
    color: olivedrab;
  }
  .promoted {
    font-style: italic;
  }
</style>
