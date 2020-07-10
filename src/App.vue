<template>
  <div id="app">
    <Header />
    <Navbar
      :page="page"
      :links="links"
      @changePage="page = $event" />
    <Hero v-if="page === 0" />

    <Sunflower />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Sunflower from '@/components/Sunflower'

export default {
  name: 'App',
  components: {
    Header,
    Hero,
    Navbar,
    Sunflower,
  },
  data: () => ({
    page: 0,
    links: [
      'Home',
      'Our Story',
      'Registry',
      'Events',
      'RSVP',
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
