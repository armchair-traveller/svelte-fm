<script>
  const assets = "/fylo-data-storage-component";
</script>

<style>
  .box {
    align-items: flex-start;
    background-color: var(--blue-300);
    width: 87%;
    margin: 0 auto;
    border-radius: 0.5rem;
    border-top-right-radius: 3rem;
    padding-left: 40px;
    margin-bottom: 1rem;
    height: 200px;
  }

  .logo {
    margin-bottom: 2rem;
    margin-top: 45px;
  }

  .icons img {
    margin-right: 0.7rem;
    background-color: var(--blue-400);
    width: 3rem;
    height: 3rem;
    object-fit: none;
    border-radius: 0.7rem;
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
