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
        Due to Covid we have decided not to do an in-person wedding. Our wedding will be live over Zoom. We'll keep you updated on the details.
      </p>
    </section>

    <hr />

    <section id="registry">
      <h2>Registries</h2>
      <div class="registries-grid">
        <template v-for="(registry, i) in registries">
          <h3 :key="`${i}-name`">{{ registry.name }}</h3>
          <a
            :key="`${i}-link`"
            :href="registry.link"
            class="btn"
          >See Registry</a>
        </template>
      </div>
    </section>

    <hr />

    <section id="story">
      <h2>Our Story</h2>
      <p>
        It started over coffee. One grande caramel macchiato, extra shot of espresso, extra caramel drizzle for Maddy. The same order every morning, stirred with a wooden stick and conspicuous over-the-shoulder glances at the lanky barista who had made it for me. Allister. It took a week and a half to learn his schedule, two weeks of awkward small talk to verify that my heartbeat was in fact picking up when he looked at me from across the counter, and a whole twenty four hours to work up the nerve to leave my number on the corner for him. That scrap of paper spurred him on to return the gesture with his own number—he had written it out before he left his apartment that morning, just in case.
      </p>
      <p>
        When I met Allister Moon in Sellwood Park on November 21st, I watched him walk into the park from behind a tree. I had dirt smeared on the seat of my jeans from tripping just minutes before, and from across the field I almost didn’t recognize him. But the minute we started walking around and talking about our days, our histories, and our shared opinions on Romeo and Juliet I felt like I had known him my whole life. When we held hands the first time that afternoon, I felt more grounded in my own skin than I ever had before. My whole body relaxed and I was struck with the feeling that this was going to be different than any other relationship I had been in before.
      </p>
      <p>
        Boy was I right. Not only that, but I was lucky enough that Allister felt the same way. Our relationship started in the last month and a half of 2019, and four months later everything changed, not just in our little corner of the world but on a global scale. COVID-19 and quite literally everything else that hit during 2020 (cancer diagnosis in the family, three months living in quarantine together with my (Maddy) family, the racial injustice and the following protests and civil unrest, wildfires, political upset) changed the landscape of our early dating life. We were engaged in late March and had started planning for a wedding the following year. We were hopeful for a vaccine and boosters to be approved by early 2021. As COVID went on with no valid vaccine on the horizon, we realized that we would need to postpone our in person celebrations.
      </p>
      <p>
        After much discussion we decided that we didn’t want to wait to be married, so we will be jumping on the Zoom wedding train on February 20th. We are so excited to start our lives together. While we regret not being able to celebrate in person, we look forward to seeing your beautiful faces in our living room in February.
      </p>
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
  props: {
    registries: Array,
  },
}
</script>

<style lang="scss" scoped>
.registries-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 30px 20px;
  align-items: flex-end;
  padding: 0 5%;

  h3 {
    text-align: left;

    border-bottom: 2px dotted $backColor;
  }
}
</style>
