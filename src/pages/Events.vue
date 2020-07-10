<template>
  <section>
    <h2>Events</h2>

    <div class="rsvp-group">
      <div class="info-wrapper">
        <h3>The Wedding</h3>
        <p>04.23.2021 | Postlewaits</p>
        <button>RSVP</button>
      </div>

      <div class="map-wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2812.3424062040167!2d-122.72385908452962!3d45.18016456037205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549566d29719f1ad%3A0x3e47d80a20dad4db!2sPostlewait&#39;s%20Country%20Weddings!5e0!3m2!1sen!2sus!4v1594347186604!5m2!1sen!2sus" width="100%" height="100%" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventsPage',
}
</script>

<style lang="scss" scoped>
section {
  padding: 20px;
}

.rsvp-group {
  display: flex;
  flex-direction: column;

  color: white;
  text-align: center;
  text-shadow: $defaultTextShadow;

  .info-wrapper {
    flex-grow: 1;
  }

  .map-wrapper {
    width: 400px;
    height: 300px;
    padding: 3px;
    border: 1px solid white;
  }

  @include lg {
    flex-direction: row;
  }
}
</style>
