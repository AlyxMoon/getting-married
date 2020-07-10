<template>
  <header>
    <hr />
    <h2 class="date">
      04.23.2021
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

  margin-top: 60px;
  text-align: center;

  h1 {
    margin: 0 30px;
  }

  hr {
    flex-grow: 1;
    margin: 0 20px;

    border: 2px solid white;
    border-radius: 4px;
  }
}
</style>
