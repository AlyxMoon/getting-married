<template>
  <div id="app">
    <Hero />
    <Content>
      <component :is="pages[page].component"></component>
    </Content>
  </div>
</template>

<script>
import Content from '@/components/Content'
import Hero from '@/components/Hero'

import HomePage from '@/pages/Home'

export default {
  name: 'App',
  components: {
    Content,
    Hero,
  },
  data: () => ({
    page: 0,
    pages: [
      { text: 'Home', component: HomePage },
      'Our Story',
      'Registry',
      'The Day',
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
