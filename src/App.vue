<template>
  <div id="app">
    <Hero />
    <Navbar
      :links="pages"
      :page.sync="page"
    />

    <Content />
  </div>
</template>

<script>
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Content,
    Hero,
    Navbar,
  },
  data: () => ({
    page: 0,
    pages: [
      { text: 'Home', link: '#home' },
      { text: 'Event', link: '#event' },
      { text: 'Registry', link: '#registry' },
      { text: 'Our Story', link: '#story' },
      { text: 'Photos', link: '#photos' },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
