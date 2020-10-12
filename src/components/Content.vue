<template>
  <section>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'Content',
}
</script>

<style lang="scss" scoped>
section {
  min-height: 600px;
  width: 700px;
  max-width: 90vw;

  margin: 40px auto;

  background-image: url('../assets/images/vintage-dark-blue-wallpaper.png');
  background-repeat: repeat;
  border-radius: 4px;
  box-shadow: 0px 5px 20px 3px #2A335A;

  @include lg {
    min-height: 900px;
    width: 1000px;
  }
}
</style>
