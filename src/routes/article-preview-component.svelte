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
    line-height: 1.5rem;
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

  .bottom {
    display: flex;
    flex-flow: row nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;
  }
  .bottom img {
    border-radius: 50%;
    height: 45px;
    margin-right: 1rem;
  }

  h3 {
    font-size: 0.8rem;
    margin-bottom: 0.25rem;
  }

  .bottom p {
    font-size: 0.75rem;
    color: var(--blue-200);
  }

  .bottom > div {
    display: flex;
    align-content: center;
  }

  .share {
    background-color: var(--blue-100);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    overflow: none;
    display: flex;
    align-items: center;
  }
  .share img {
    height: 15px;
    margin: 0;
  }

  .date {
    margin-bottom: 0;
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

      <div class="bottom">
        <div>
          <img
            src="./article-preview-component/avatar-michelle.jpg"
            alt="Michelle's Avatar" />
          <div>
            <h3>Michelle Appleton</h3>
            <p class="date">28 Jun 2020</p>
          </div>
        </div>

        <button class="share">
          <img src="./article-preview-component/icon-share.svg" alt="Share" /></button>
      </div>
    </div>
  </article>

  <div class="attribution" style="margin-top:1rem;">
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by <a href="_">Fang🦁</a>.
  </div>
</section>
