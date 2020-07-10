<template>
  <div id="app">
    <Header />

    <!-- <Hero />

    <main>
      test stuff here
    </main>

    <Footer /> -->

    <Sunflower />
  </div>
</template>

<script>
// import Footer from '@/components/Footer'
import Header from '@/components/Header'
// import Hero from '@/components/Hero'
import Sunflower from '@/components/Sunflower'

export default {
  name: 'App',
  components: {
    // Footer,
    Header,
    // Hero,
    Sunflower,
  },
}
</script>

<style lang="scss" scoped></style>
