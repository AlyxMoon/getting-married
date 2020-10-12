<template>
  <div class="photo-catalog">
    <!-- <img class="pure-img" src="@/assets/images/couple-02.jpg" /> -->
    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-03.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-04.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-05.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-06.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-08.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-07.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-10.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-12.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-13.jpg" />
      <div class="img-overlay" />
    </div>
    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-09.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-11.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-15.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-14.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-16.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-17.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-18.jpg" />
      <div class="img-overlay" />
    </div>

    <div class="img-wrapper">
      <img class="pure-img" src="@/assets/images/couple-21.jpg" />
      <div class="img-overlay" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Photos',
}
</script>

<style lang="scss" scoped>
.photo-catalog {
  max-width: 1100px;

  margin: 0 auto;
  padding: 5px;

  display: grid;
  grid-auto-flow: dense row;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2px;

  background-color: $primaryColor;

  .img-wrapper {
    .img-overlay {
      box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.8) inset;
      background-color: transparent;
    }
  }

  .img-wrapper:nth-child(2) {
    @include gridPos(2, 4, 1, 2);
  }

  .img-wrapper:nth-child(5) {
    @include gridPos(2, 4, 2, 3);
  }

  .img-wrapper:nth-child(7) {
    @include gridPos(1, 3, 3, 5);
  }

  .img-wrapper:nth-child(12) {
    @include gridPos(1, 3, 5, 7);
  }

  .img-wrapper:nth-child(13) {
    @include gridPos(3, 4, 5, 7);
  }

  .img-wrapper:nth-child(14) {
    @include gridPos(4, 5, 5, 7);
  }

  .img-wrapper:nth-child(15) {
    @include gridPos(1, 2, 7, 8);
  }

  .img-wrapper:nth-child(16) {
    @include gridPos(2, 3, 7, 8);
  }

  .img-wrapper:nth-child(17) {
    @include gridPos(3, 5, 7, 8);
  }
}
</style>
