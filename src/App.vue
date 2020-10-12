<template>
  <div id="app">
    <Hero />
    <Navbar
      :links="pages"
      :page.sync="page"
    />

    <Content>
      <component :is="pages[page].component"></component>
    </Content>
  </div>
</template>

<script>
import Content from '@/components/Content'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

import HomePage from '@/pages/Home'

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
      { text: 'Home', component: HomePage },
      { text: 'Event', component: HomePage },
      { text: 'Photos', component: HomePage },
      { text: 'Registry', component: HomePage },
    ],
  }),
}
</script>

<style lang="scss" scoped></style>
