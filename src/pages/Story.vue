<template>
  <section>
    <h2>Our Story</h2>
    <div class="story-wrapper">
      <div class="img-wrapper">
        <img class="pure-img" src="@/assets/images/our-photo.jpg" />
        <div class="img-overlay" />
      </div>

      <div class="story">
        <p>
          Starbucks lovers!
        </p>
      </div>
    </div>

    <h2>Her Story</h2>
    <div class="story-wrapper">
      <div class="img-wrapper">
        <img class="pure-img" src="@/assets/images/our-photo.jpg" />
        <div class="img-overlay" />
      </div>

      <div class="story">
        <p>
          Starbucks lovers!
        </p>
      </div>
    </div>

    <h2>His Story</h2>
    <div class="story-wrapper">
      <div class="img-wrapper">
        <img class="pure-img" src="@/assets/images/our-photo.jpg" />
        <div class="img-overlay" />
      </div>

      <div class="story">
        <p>
          Starbucks lovers!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'StoryPage',
}
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
  text-align: center;

  @include lg {
    text-align: left;
  }
}

.story-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 2px solid white;
  margin-bottom: 40px;

  @include lg {
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    border-bottom: none;
  }
}

.story {
  flex-grow: 1;
  margin: 20px 0;

  @include lg {
    margin: 0 20px;
  }
}

.img-wrapper {
  max-width: 300px;
  border: 3px solid $white;
}

</style>
