<template>
  <div id="app">
    <Header />
    <Navbar
      :page="page"
      :links="links"
      @changePage="page = $event" />

    <HomePage v-if="page === 0" />
    <StoryPage v-if="page === 1" />
    <RegistryPage v-if="page === 2" />
    <Events v-if="page === 3" />
    <RsvpPage v-if="page === 4" />

    <Sunflower />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Sunflower from '@/components/Sunflower'

import HomePage from '@/pages/Home'
import StoryPage from '@/pages/Story'
import RegistryPage from '@/pages/Registry'
import Events from '@/pages/Events'
import RsvpPage from '@/pages/Rsvp'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Sunflower,

    HomePage,
    StoryPage,
    RegistryPage,
    Events,
    RsvpPage,
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
