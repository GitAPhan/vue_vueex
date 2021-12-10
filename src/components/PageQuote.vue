<template>
  <div class="quote_container">
    <p>{{ quote.quote }}</p>
    <h4>{{ quote.source }}</h4>
    <h5>{{ quote.philosophy }}</h5>
  </div>
</template>

<script>
export default {
  name: "page-quote",
  props: {
    quote: Object,
  },
};
</script>

<style scoped>
.quote_container {
  width: 300px;
  padding: 10px;
  border: solid black 1px;
  border-radius: 15px;
}
</style>