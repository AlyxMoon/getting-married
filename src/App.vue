<template>
  <div id="app">
    <Hero />
    <Navbar
      :links="pages"
      :page.sync="page"
    />

    <Content :registries="registries" />
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
    registries: [
      {
        name: 'Macy\'s',
        link: 'https://www.macys.com/wgl/registry/guest/2412509',
      },
      {
        name: 'Bed Bath & Beyond',
        link: 'https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549550332?eventType=Wedding',
      },
      {
        name: 'Target',
        link: 'https://www.target.com/gift-registry/giftgiver?registryId=986943dd092b43ca8d1a709aa6b92964',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
