<template>
  <div>
    <button-one></button-one>
    <div id="quotes_container">
      <page-quote
        v-for="quote in quotes"
        :key="quote['_id']"
        :quote="quote"
      ></page-quote>
      <h6 @click="get_quotes_from_api">Know thy self!</h6>
    </div>
  </div>
</template>

<script>
import ButtonOne from "./ButtonOne.vue";
import PageQuote from "./PageQuote.vue";
export default {
  name: "home-content",
  methods: {
    get_quotes_from_api() {
      this.$store.dispatch("get_quotes_from_api")
    }
  },
  components: {
    ButtonOne,
    PageQuote,
  },
  computed: {
    quotes() {
      return this.$store.state["quotes"];
    },
  },
};
</script>

<style scoped>
#quotes_container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 15px;
  place-items: center;
  margin-top: 15px;
}
</style>