<template>
  <div class="joke-item">
    <h2>{{ joke.setup }}</h2>
    <p>{{ joke.punchline }}</p>
  </div>
</template>

<script>
export default {
  name: 'JokeItem',
  props: {
    joke: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.joke-item {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
}
.joke-item h2 {
  margin: 0 0 10px 0;
}
</style>
