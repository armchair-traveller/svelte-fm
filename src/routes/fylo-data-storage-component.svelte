<script>
  import Bottom from "../components/fylo-data-storage-component/Bottom.svelte";
  import Top from "../components/fylo-data-storage-component/Top.svelte";
</script>

<style>
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }
  .background {
    background-image: url("/fylo-data-storage-component/bg-mobile.png");
    width: 375px;
    height: 667px;
    margin: 1rem auto;
  }
</style>

<svelte:head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <!-- displays site properly based on user's device -->
  <link
    rel="icon"
    type="image/png"
    sizes="32x32"
    href="./images/favicon-32x32.png" />
  <title>Frontend Mentor | Fylo data storage component</title>
</svelte:head>

<div class="container">
  <div class="background">
    <Top />
    <Bottom />
  </div>

  <div class="attribution" style="margin-top: 1rem;">
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by <a
      href="https://github.com/armchair-traveller"
      target="_blank">Fang🦁</a>.
  </div>
</div>
