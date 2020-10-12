<template>
  <div class="hero-wrapper">
    <h1>We're Getting Married!</h1>
    <div class="img-overlay" />
  </div>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
div.hero-wrapper {
  height: 300px;
  width: 100%;

  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  background: rgba(0, 0, 0, 0.9);
  background-image: url('../assets/images/couple-01-small.jpg');
  background-position: top center;
  background-size: cover;
  background-repeat: no-repeat;

  @include lg {
    height: 600px;
    max-width: 1600px;

    background-image: url('../assets/images/couple-01-large.jpg');
    background-size: cover;
  }
}

h1 {
  position: relative;
  z-index: 5;
}

</style>
