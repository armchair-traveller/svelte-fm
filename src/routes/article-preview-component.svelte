<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap");
  h2,
  h3,
  p {
    font-family: "Manrope", sans-serif;
  }

  :root {
    --blue-100: hsl(210, 46%, 95%);
    --blue-200: hsl(212, 23%, 69%);
    --blue-300: hsl(214, 17%, 51%);
    --blue-400: hsl(217, 19%, 35%);
  }

  .container {
    margin: 0 auto;
  }
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }

  @media (min-width: 768px) {
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
    href="./article-preview-component/favicon-32x32.png" />

  <title>Frontend Mentor | Article preview component</title>
</svelte:head>

<section class="container">
  <h2>
    Shift the overall look and feel by adding these wonderful touches to
    furniture in your home
  </h2>

  <p>
    Ever been in a room and felt like something was missing? Perhaps it felt
    slightly bare and uninviting. I’ve got some simple tips to help you make any
    room feel complete.
  </p>

  <h3>Michelle Appleton</h3>
  <p>28 Jun 2020</p>

  <button> Share </button>

  <div class="attribution">
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by <a href="_">Your Name Here</a>.
  </div>
</section>
