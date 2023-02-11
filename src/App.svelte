<script lang="ts">
  // import Card from './components/slots-over-props/Card.svelte';

  import NameList from './components/slots-over-props/NameList.svelte';
</script>

<main>
  <!-- using slot basic -->
  <!-- <Card>Card content into slot</Card>
  <Card><h2>Card content</h2></Card>
  <Card><img src="https://picsum.photos/200/200" alt="" /></Card>
  <Card /> -->

  <!-- NAMED SLOTS -->
  <!-- <Card>
    <div slot="header"><h3>Header</h3></div>
    <div slot="content"><img src="https://picsum.photos/200/200" alt="" /></div>
    <div slot="footer"><button>View Details</button></div>
  </Card> -->

  <!-- SLOT PROPS, USING DATA FROM CHILD COMPONENT -->
  <NameList>
    <h3 slot="hero" let:firstName let:lastName>
      {firstName}
      {lastName}
    </h3>
  </NameList>
  <NameList>
    <h3 slot="hero" let:firstName let:lastName>
      {lastName}, {firstName}
    </h3>
  </NameList>
  <NameList>
    <h3 slot="hero" let:firstName let:lastName>
      {firstName}
    </h3>
  </NameList>
</main>

<style>
</style>
