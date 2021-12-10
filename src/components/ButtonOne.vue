<template>
  <div>
    <button @click="get_philosophy_quotes">EXPLORE PHILOSOPHY</button>
  </div>
</template>

<script>
export default {
  name: "button-one",
  data() {
      return {
          philosophy_quotes: undefined
      }
  },
  methods: {
    get_philosophy_quotes() {
    this.$store.dispatch("get_quotes_from_api");
    },
  },
};
</script>

<style scoped>
</style>