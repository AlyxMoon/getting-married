<template>
  <div id="app">
    <Navbar />

    <Hero />

    <main>
      test stuff here
    </main>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Footer,
    Hero,
    Navbar,
  },
}
</script>

<style lang="scss" scoped></style>
