<template>
  <div>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li v-for="(item, index) in items" :key="index" :class="getClassForItemIndex(index)">
          <a :href="item.link">
            <span>{{ item.title }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  methods: {
    getClassForItemIndex(index) {
      return {
        'is-active': this.isLastItemIndex(index)
      }
    },
    isLastItemIndex(index) {
      return this.items.length - 1 == index
    }
  },
}
</script>

<style lang="scss" scoped>

</style>