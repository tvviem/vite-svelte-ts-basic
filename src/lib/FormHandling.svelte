<script lang="ts">
  const formValues = {
    name: '',
    profileSummary: '',
    country: '',
    jobLocation: [],
    remoteWork: false,
    skillSet: [],
    yearsOfExperience: ''
  };

  function submitForm(event: SubmitEvent) {
    // event.preventDefault(); // or using on:submit|preventDefault in form element
    console.log(formValues);
  }
</script>

<section>
  <div>
    <pre>
      {JSON.stringify(formValues, null)}
    </pre>
  </div>
  <form on:submit|preventDefault={submitForm}>
    <div class="formContent">
      <div class="row1">
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
          <select
            id="job-location"
            bind:value={formValues.jobLocation}
            multiple
          >
            <option value="Requirements Collection">Req Colection</option>
            <option value="System Analysis">Sys Analysis</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
        </div>
      </div>

      <div class="row2">
        <div class="formControl">
          <input
            type="checkbox"
            id="remoteWork"
            bind:checked={formValues.remoteWork}
          />
          <label for="remoteWork">Open to remote work?</label>
        </div>

        <div class="formControl">
          <h3 style="display: inline-flex;">Skills SET</h3>
          <input
            type="checkbox"
            id="html"
            value="html"
            bind:group={formValues.skillSet}
          />
          <label for="html">HTML</label>
          <input
            type="checkbox"
            id="css"
            value="css"
            bind:group={formValues.skillSet}
          />
          <label for="css">CSS</label>
          <input
            type="checkbox"
            id="javascript"
            value="javascript"
            bind:group={formValues.skillSet}
          />
          <label for="javascript">JAVASCRIPT</label>
        </div>

        <div class="formControl">
          <h3 style="display: inline-flex;">Years of Experience</h3>
          <input
            type="radio"
            id="0-2"
            value="0-2"
            bind:group={formValues.yearsOfExperience}
          />
          <label for="0-2">0-2 year(s)</label>
          <input
            type="radio"
            id="3-5"
            value="3-5"
            bind:group={formValues.yearsOfExperience}
          />
          <label for="3-5">3-5 years</label>
          <input
            type="radio"
            id="6-10"
            value="6-10"
            bind:group={formValues.yearsOfExperience}
          />
          <label for="6-10">6-10 years</label>

          <input
            type="radio"
            id="10+"
            value="10+"
            bind:group={formValues.yearsOfExperience}
          />
          <label for="10+">above 10 years</label>
        </div>
      </div>
    </div>
    <div>
      <button type="submit">Send info</button>
    </div>
  </form>
</section>

<style>
  .formContent,
  .row1,
  .row2 {
    display: flex;
    flex-wrap: wrap;
  }
  .formContent {
    flex-direction: column;
  }
  .row1 {
    background-color: lightpink;
    align-items: center;
  }

  .row2 {
    background-color: chocolate;
    align-items: center;
  }

  .formControl {
    margin: 20px auto;
  }
</style>
