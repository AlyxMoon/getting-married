<template>
  <section>
    <h2>Our Story</h2>

    <div class="story-wrapper">
      <div class="img-wrapper">
        <img class="pure-img" src="@/assets/images/our-photo.jpg" />
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
}

.story-wrapper {
  display: flex;
  flex-direction: column;

  @include lg {
    flex-direction: row;
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
  border: 3px solid white;
}
</style>
