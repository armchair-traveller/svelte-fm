<style>
  .box {
    background-color: var(--blue-300);
    width: 90%;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    padding-bottom: 0;
  }

  progress[value]::-webkit-progress-bar {
    background-color: blue;
  }
</style>

<div class="box">
  <p>You’ve used <strong>815 GB</strong> of your storage</p>
  <div class="bar"><progress value="0.815" /></div>
  <p>0 GB</p>
  <p>1000 GB</p>
  <h2>185 GB Left</h2>
</div>
