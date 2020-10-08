<script>
  const assets = "./fylo-data-storage-component";
</script>

<style>
  .box {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    background-color: var(--blue-300);
    width: 90%;
    margin: 0 auto;
    border-radius: 0.5rem;
    border-top-right-radius: 3rem;
    padding: 2rem;
  }

  .logo {
    margin-bottom: 2rem;
  }

  .icons img {
    background-color: var(--blue-400);
    width: 3rem;
    height: 3rem;
    object-fit: none;
  }
</style>

<div class="box">
  <img class="logo" src="{assets}/logo.svg" alt="Fylo Logo" />
  <div class="icons">
    <img src="{assets}/icon-document.svg" alt="Document" />
    <img src="{assets}/icon-folder.svg" alt="Folder" />
    <img src="{assets}/icon-upload.svg" alt="Upload" />
  </div>
</div>
