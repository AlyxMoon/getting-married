<template>
  <nav>
    <ul class="menu">
      <li
        v-for="(link, index) of links"
        :key="link.text"
        :class="{ active: page === index }"
        @click="$emit('update:page', index)">
        {{ link.text }}
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
  grid-template-columns: repeat(4, 1fr);
  margin: 0;
  padding: 0;

  font-family: "Courgette", cursive;
  text-align: center;
}

li {
  padding: 5px 0;
  border: 2px solid $white;
  color: black;
  font-size: 20px;

  cursor: pointer;
  transition-duration: 0.3s;

  &.active, &:hover {
    background-color: $primaryColorAccent;
    color: $white;
  }

  &:not(:last-child) {
    border-right: none;
  }
}
</style>
