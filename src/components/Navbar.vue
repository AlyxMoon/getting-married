<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(link, index) of links"
        :key="link.link"
        :class="{ active: page === index }">
        <a
          :href="link.link"
          @click="scroll(link.link, index, $event)"
        >{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import debounce from '@/lib/debounce'

export default {
  name: 'Navbar',
  props: {
    page: Number,
    links: {
      type: Array,
      default: () => [],
    },
  },

  data: () => ({
    navOffset: 40,
  }),

  created () {
    document.addEventListener('scroll', debounce(() => {
      this.detectActiveLink()
    }, 100))
  },

  methods: {
    getElements () {
      return this.links
        .map(({ link }) => document.querySelector(link))
        .filter(element => !!element)
    },

    scroll (link, index, event) {
      const element = document.querySelector(link)
      if (!element) return

      event.preventDefault()

      const { top } = element.getBoundingClientRect()
      this.$emit('update:page', index)
      window.scrollTo({
        top: window.pageYOffset + top - this.navOffset,
        behavior: 'smooth',
      })
    },

    detectActiveLink () {
      const elements = this.getElements()

      for (let i = 0; i < elements.length; i++) {
        const { bottom } = elements[i].getBoundingClientRect()

        if (bottom - this.navOffset > 0) {
          return this.$emit('update:page', i)
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  margin: 0 auto;

  border: 1px solid white;

  @include md {
    position: sticky;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
  }
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1px;
  margin: 0;
  padding: 0;

  background-color: white;

  font-family: "Courgette", cursive;
  text-align: center;

  @include md {
    grid-template-columns: repeat(5, 1fr);
  }
}

li {
  padding: 5px 0;

  background-color: #80CCDD;
  color: black;
  font-size: 18px;

  @include lg {
    font-size: 20px;
  }

  user-select: none;
  cursor: pointer;
  transition-duration: 0.3s;

  &.active, &:hover {
    background-color: $primaryColorAccent;
    color: $white;
  }

  &:not(:last-child) {
    border-right: none;
  }

  a {
    display: block;
    height: 100%;

    color: inherit;
    text-decoration: none;
  }
}
</style>
