<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(link, index) of links"
        :key="link.id"
        :class="{ active: page === index }">
        <a :href="link.link">{{ link.text }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    page: Number,
    links: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  margin: 0 auto;

  background-color: rgba(0, 0, 0, 0.4);
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  margin: 0;
  padding: 0;

  font-family: "Courgette", cursive;
  text-align: center;

  @include md {
    grid-template-columns: repeat(5, 1fr);
  }
}

li {
  padding: 5px 0;
  border: 2px solid $white;
  color: black;

  font-size: 18px;

  @include lg {
    font-size: 20px;
  }

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
