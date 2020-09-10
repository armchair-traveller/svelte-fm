<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap");
  :root {
    --blue-100: hsl(210, 46%, 95%);
    --blue-200: hsl(212, 23%, 69%);
    --blue-300: hsl(214, 17%, 51%);
    --blue-400: hsl(217, 19%, 35%);
  }
  * {
    font-family: "Manrope", sans-serif;
  }
  h2,
  h3,
  p {
    margin: 0 auto;
    color: var(--blue-400);
  }
  p {
    font-size: 13px;
  }

  .container {
    margin: 0 auto;
    background: var(--blue-100);
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
  }
  .attribution {
    font-size: 11px;
    text-align: center;
  }
  .attribution a {
    color: hsl(228, 45%, 44%);
  }

  article {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 330px;
    background-color: white;
    overflow: hidden;
    border-radius: 0.6rem;
  }

  .drawers {
    width: 330px;
    height: 200px;
    object-fit: cover;
  }

  .content {
    padding: 2rem 2rem;
    padding-bottom: 1.5rem;
  }

  h2 {
    font-size: 1rem;
  }
  h2,
  p {
    margin-bottom: 1rem;
  }

  p {
    color: var(--blue-300);
    line-height: 1.3rem;
    letter-spacing: 0.015rem;
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
  <article>
    <img
      class="drawers"
      src="./article-preview-component/drawers.jpg"
      alt="Drawers" />

    <div class="content">
      <h2>
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h2>
      <p>
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>

      <div>
        <img
          src="./article-preview-component/avatar-michelle.jpg"
          alt="Michelle's Avatar" />
        <h3>Michelle Appleton</h3>
        <p>28 Jun 2020</p>
      </div>
      <button> Share </button>
    </div>
  </article>

  <div class="attribution">
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by <a href="_">Fang🦁</a>.
  </div>
</section>
