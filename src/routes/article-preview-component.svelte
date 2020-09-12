<script>
  import { fade } from "svelte/transition";
  let active = false;
  let activeReady = true;
  let innerWidth;
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap");
  :root {
    --blue-100: hsl(210, 46%, 95%);
    --blue-200: hsl(212, 23%, 69%);
    --blue-300: hsl(214, 17%, 51%);
    --blue-400: hsl(217, 19%, 35%);
    background: var(--blue-100);
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
    min-height: 100vh;
    min-width: 100%;
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
    border-radius: 0.6rem;
  }

  .drawers {
    width: 330px;
    height: 200px;
    object-fit: cover;
    border-radius: 0.6rem 0.6rem 0 0;
    filter: brightness(1.03);
  }

  .content {
    padding: 2rem 2rem;
    padding-bottom: 0;
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
    height: 5rem;
    width: 100%;
    padding: 0 2rem;
    border-radius: 0 0 0.6rem 0.6rem;
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
    width: 2rem;
    height: 2rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .share img {
    height: 13px;
    margin: 0;
    border-radius: 0;
  }

  .date {
    margin: 0;
    line-height: 1rem;
  }

  .bottom div > div {
    display: flex;
    flex-flow: column;
    justify-content: center;
  }

  .bottom.active {
    background-color: var(--blue-400);
  }

  .share.active {
    background-color: var(--blue-300);
  }

  button.share.active > img {
    filter: brightness(0) invert(1);
  }

  div.share-btns > p {
    margin: 0;
    font-size: 0.8rem;
    letter-spacing: 0.3rem;
  }

  div.share-btns > button {
    height: 20px;
    background: none;
    border: none;
    padding: 0;
    margin: 0 0.5rem;
  }

  div.share-btns > button:first-of-type {
    margin-left: 1rem;
  }

  div.share-btns img {
    width: 20px;
    height: 20px;
    margin: 0;
    padding: 0;
    border-radius: 0;
  }

  /* desktop dimensions */
  @media (min-width: 850px) {
    article {
      max-width: 770px;
      display: grid;
      grid-template-columns: 20rem 1fr;
      grid-template-areas:
        "image details"
        "image bottom";
      box-shadow: 1rem 1rem 16px 13px rgba(178, 178, 178, 0.2);
    }
    .drawers {
      grid-area: image;
      height: 20rem;
      width: 20rem;
      border-radius: 0.6rem 0 0 0.6rem;
    }
    .content {
      grid-area: details;
      align-self: end;
    }
    .bottom {
      grid-area: bottom;
      align-self: start;
    }

    div.content h2 {
      font-size: 1.3rem;
    }

    .d-share {
      position: relative;
    }
    .d-share div.share-btns {
      position: absolute;
      background-color: var(--blue-400);
      width: 15rem;
      height: 3rem;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: center;
      border-radius: 0.6rem;
      left: -6.5rem;
      top: -4.75rem;
      box-shadow: 0 0.5rem 2px 2px rgba(178, 178, 178, 0.1);
    }
    .share-btns::before {
      background-color: var(--blue-400);
      content: "";
      display: block;
      height: 16px;
      width: 16px;
      position: absolute;
      bottom: -7.5px;
      transform: rotate(47deg) skew(5deg);
      box-shadow: 0 2px 2px 0 rgba(178, 178, 178, 0.4);
    }
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

<svelte:window bind:innerWidth />

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
    </div>
    {#if innerWidth >= 850}
      <!-- desktop interaction -->
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

        <div class="d-share">
          <button
            class="share"
            class:active
            on:click={() => (active = !active)}>
            <img src="./article-preview-component/icon-share.svg" alt="Share" />
          </button>

          {#if active}
            <!-- popup share -->
            <div class="share-btns" transition:fade>
              <p>SHARE</p>
              <button><img
                  src="./article-preview-component/icon-facebook.svg"
                  alt="Facebook" /></button>
              <button><img
                  src="./article-preview-component/icon-twitter.svg"
                  alt="Twitter" /></button>
              <button><img
                  src="./article-preview-component/icon-pinterest.svg"
                  alt="Pinterest" /></button>
            </div>
          {/if}
        </div>
      </div>
    {:else if !active && activeReady}
      <div class="bottom" in:fade>
        <div>
          <img
            src="./article-preview-component/avatar-michelle.jpg"
            alt="Michelle's Avatar" />
          <div>
            <h3>Michelle Appleton</h3>
            <p class="date">28 Jun 2020</p>
          </div>
        </div>

        <button class="share" on:click={() => (active = !active)}>
          <img src="./article-preview-component/icon-share.svg" alt="Share" />
        </button>
      </div>
    {:else if activeReady}
      <div
        class="bottom active"
        transition:fade
        on:outrostart={() => (activeReady = false)}
        on:outroend={() => (activeReady = true)}>
        <div class="share-btns">
          <p>SHARE</p>
          <button><img
              src="./article-preview-component/icon-facebook.svg"
              alt="Facebook" /></button>
          <button><img
              src="./article-preview-component/icon-twitter.svg"
              alt="Twitter" /></button>
          <button><img
              src="./article-preview-component/icon-pinterest.svg"
              alt="Pinterest" /></button>
        </div>
        <button class="share active" on:click={() => (active = !active)}>
          <img src="./article-preview-component/icon-share.svg" alt="Share" />
        </button>
      </div>
    {/if}
  </article>

  <div class="attribution" style="margin-top:1rem;">
    Challenge by <a
      href="https://www.frontendmentor.io?ref=challenge"
      target="_blank">Frontend Mentor</a>. Coded by <a
      href="https://github.com/armchair-traveller"
      target="_blank">Fang🦁</a>.
  </div>
</section>
