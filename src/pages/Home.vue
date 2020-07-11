<template>
  <section>
    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/rings.jpg" />
      <div class="img-overlay" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  div.img-wrapper {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
