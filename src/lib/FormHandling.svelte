<script lang="ts">
  let files: FileList;
  const formValues = {
    name: '',
    profileSummary: '',
    country: '',
    jobLocation: [],
    imgBase64: ''
  };
</script>

<section>
  <div>
    <pre>
      {JSON.stringify(formValues, null)}
    </pre>
  </div>
  <form action="">
    <div class="formContent">
      <div class="formControl">
        <label for="name">Name</label>
        <input type="text" id="name" bind:value={formValues.name} />
      </div>

      <div class="formControl">
        <label for="profile">Profile Summary</label>
        <textarea id="profile" bind:value={formValues.profileSummary} />
      </div>

      <div class="formControl">
        <label for="country">Your country</label>
        <select id="country" bind:value={formValues.country}>
          <option value="">Select a country</option>
          <option value="Vietnam">Vietnam</option>
          <option value="India">India</option>
          <option value="Singapore">Singapore</option>
        </select>
      </div>

      <div class="formControl">
        <label for="job-location">Job Location</label>
        <select id="job-location" bind:value={formValues.jobLocation} multiple>
          <option value="Requirements Collection">Req Colection</option>
          <option value="System Analysis">Sys Analysis</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </div>

      <div class="formControl">
        <label for="taptin">Chọn tập tin</label>
        <input id="taptin" type="file" multiple bind:files />
      </div>

      <div class="formControl">
        <label for="img34">Hình 3x4</label>
        <input type="file" />
      </div>
    </div>
  </form>
  {#if files && files[0]}
    <p>
      {files[0].name}
    </p>
  {/if}
</section>

<style>
  section {
    margin: 5px auto;
  }
  .formContent {
    display: flex;
  }
  .formControl {
    margin: 20px auto;
  }
</style>
