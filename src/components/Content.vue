<template>
  <main>
    <section id="home">
      <h1>Allister Moon</h1>
      <h3>AND</h3>
      <h1>Maddy Kays</h1>
    </section>

    <hr />

    <section id="event">
      <h2>Event</h2>
      <h3>Portland, OR</h3>
      <h3>February 20, 2021</h3>
      <p>
        Due to Covid we have decided not to do a public wedding. Our wedding will be live over Zoom. We'll keep you updated on the details.
      </p>
    </section>

    <hr />

    <section id="registry">
      <h2>Registry</h2>
      <p>
        Our wedding registry can be found here
      </p>
    </section>

    <hr />

    <section id="story">
      <h2>Our Story</h2>
    </section>

    <hr />

    <section id="photos" class="full">
      <h2>Photos</h2>

      <Photos />
    </section>
  </main>
</template>

<script>
import Photos from '@/components/Photos'

export default {
  name: 'Content',
  components: {
    Photos,
  },
}
</script>

<style lang="scss" scoped></style>
