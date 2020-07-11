<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(link, index) of links"
        :key="link"
        :class="{ active: page === index }"
        @click="$emit('changePage', index)">
        {{ link }}
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
  width: 95vw;
  max-width: 800px;
  margin: 0 auto;
}

ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;

  font-family: "Courgette", cursive;
  text-align: center;
}

li {
  padding: 5px 0;
  border: 2px solid $white;

  background-color: $white;
  color: $primaryColor;
  font-size: 18px;

  cursor: pointer;
  transition-duration: 0.3s;

  &.active, &:hover {
    background-color: $primaryColor;
    color: $white;
  }

  &:not(:last-child) {
    border-right: none;
  }
}
</style>
