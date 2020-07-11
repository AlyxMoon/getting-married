<template>
  <header>
    <hr />
    <h2 class="date">
      04.25.2021
    </h2>
    <h1 class="names">
      Maddy & Allister
    </h1>
    <h2 class="location">
      Portland, OR
    </h2>
    <hr />
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 60px auto 30px;
  max-width: 95vw;

  text-align: center;
  text-shadow: $defaultTextShadow;

  h1 {
    margin: 0 30px;
  }

  h2 {
    font-size: 24px;
  }

  hr {
    flex-grow: 1;
    margin: 0 20px;

    border: 2px solid $primaryGreen;
    border-radius: 4px;
  }
}
</style>
