<style>
  .box {
    background-color: var(--blue-300);
    width: 90%;
    margin: 0 auto;
    border-radius: 0.5rem;
    padding: 1.5rem 2rem;
    padding-bottom: 0;
  }

  .bar {
    display: flex;
    flex-flow: row-reverse;
    width: 100px;
    height: 20px;
    background-image: linear-gradient(
      to right,
      hsl(6, 100%, 80%),
      hsl(335, 100%, 65%)
    );
  }
  .bar-bg,
  .bar {
    border-radius: 1rem;
  }
  .bar-bg {
    --bar-color: #141f4c;
    border: 3px solid var(--bar-color);
    background-color: var(--bar-color);
  }
  .circle {
    margin-right: 3px;
    width: 20px;
    height: 20px;
    background-color: #fdfffe;
    border-radius: 50%;
  }
</style>

<div class="box">
  <p>You’ve used <strong>815 GB</strong> of your storage</p>
  <div class="bar-bg">
    <div class="bar">
      <div class="circle" />
    </div>
  </div>
  <p>0 GB</p>
  <p>1000 GB</p>
  <h2>185 GB Left</h2>
</div>
