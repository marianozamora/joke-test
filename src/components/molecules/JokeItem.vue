<template>
    <div class="joke-item">
      <p class="joke-item__setup">{{ joke.setup }} - {{ joke.punchline }}</p>
      <div>
        <button class="joke-item__button joke-item__button--like" @click="rateJoke(1)">
      <i class="fas fa-thumbs-up"></i> Like
    </button>
    <button class="joke-item__button joke-item__button--dislike" @click="rateJoke(-1)">
      <i class="fas fa-thumbs-down"></i> Dislike
    </button>
    <button class="joke-item__remove-button" @click="removeJoke">
      <i class="fas fa-trash"></i> Remove
    </button>
      </div>
      <p>Rating: {{ joke.rating }}</p>
    </div>
  </template>

<script>
export default {
  props: ['joke'],
  methods: {
    rateJoke(rating) {
      const updatedJoke = { ...this.joke, rating: this.joke.rating + rating };
      this.$emit('update:joke', updatedJoke);
    },
    removeJoke() {
      this.$emit('remove', this.joke.id);
    },
  },
};
</script>

<style scoped>
.joke-item {
  border: 1px solid #e2e8f0;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #edf2f7;
  border-radius: 0.25rem;
  width: 60%;
  border-radius: 10px; /* adjust this value as needed */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.joke-item__setup {
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.joke-item__punchline {
  margin-bottom: 0.5rem;
}

.joke-item__button {
  background-color: #edf2f7;
  color: #2d3748;
  border: 1px solid #e2e8f0;
  padding: 0.25rem 0.5rem;
  margin-right: 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}

.joke-item__button--like {
  background-color: #48bb78;
  color: #f7fafc;
}

.joke-item__button--dislike {
  background-color: #f56565;
  color: #f7fafc;
}

.joke-item__remove-button {
  background-color: #e53e3e;
  color: #f7fafc;
  border: none;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
}
</style>
