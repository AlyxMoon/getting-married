<template>
  <header>
    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/rings.png" />
      <div class="img-content">
        <h2>We're Getting Married!</h2>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Hero',
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 20px;
  padding-bottom: 20px;

  text-align: center;

  div.img-wrapper {
    width: 100%;
    max-width: 900px;
  }

  div.img-content {
    position: absolute;
    z-index: 3;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 5%;
  }
}
</style>
