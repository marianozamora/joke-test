<!-- eslint-disable import/no-extraneous-dependencies -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="joke-list">
    <div class="joke-list__sort-container">
      <label for="sort">Sort by:</label>
      <select v-model="sortKey">
        <option value="setup">
          Setup
        </option>
        <option value="rating">
          Rating
        </option>
      </select>
    </div>
    <div class="joke-list__jokes">
      <JokeItem
        v-for="joke in paginatedJokes"
        :key="joke.id"
        :joke="joke"
        @update:joke="updateJoke"
        @remove="removeJoke"
      />
    </div>
    <div class="joke-list__pagination">
      <button
        class="joke-list__button"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        <i class="fas fa-chevron-left" /> Previous
      </button>
      <button
        class="joke-list__button"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next <i class="fas fa-chevron-right" />
      </button>
      <p>Page {{ currentPage }} of {{ totalPages }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import JokeItem from '../molecules/JokeItem.vue';

export default {
  components: {
    JokeItem,
  },
  data() {
    return {
      jokes: [],
      sortKey: 'setup',
      currentPage: 1,
      jokesPerPage: 5,
    };
  },
  computed: {
    sortedJokes() {
      const jokesCopy = [...this.jokes];
      return jokesCopy.sort((a, b) => {
        if (this.sortKey === 'setup') {
          return a.setup.localeCompare(b.setup);
        }
        return b.rating - a.rating;
      });
    },
    paginatedJokes() {
      const start = (this.currentPage - 1) * this.jokesPerPage;
      const end = start + this.jokesPerPage;
      return this.sortedJokes.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.jokes.length / this.jokesPerPage);
    },
  },
  created() {
    this.fetchJokes();
  },
  methods: {
    async fetchJokes() {
      try {
        const response = await axios.get('https://official-joke-api.appspot.com/jokes/ten');
        this.jokes = response.data.map((joke) => ({ ...joke, rating: 0 }));
      } catch (error) {
        console.error('Error fetching jokes:', error);
      }
    },
    sortJokes() {
      this.jokes = [...this.jokes];
    },
    updateJoke(updatedJoke) {
      this.jokes = this.jokes.map((joke) => (joke.id === updatedJoke.id ? updatedJoke : joke));
    },
    removeJoke(id) {
      this.jokes = this.jokes.filter((joke) => joke.id !== id);
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage += 1;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
      }
    },
  },
};
</script>
  <style scoped>
  .joke-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }

  .joke-list__sort-container {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .joke-list__sort-container label {
    margin-right: 10px;
  }

  .joke-list__jokes {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .joke-list__pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
  }

  .joke-list__button {
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .joke-list__button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  .joke-list__button:hover:not(:disabled) {
    background-color: #45a049;
  }
  .joke-list__sort-container select {
  padding: 0.5rem;
  border-radius: 0.25rem;
  border: 1px solid #e2e8f0;
  appearance: none;
  background-color: #edf2f7;
  color: #2d3748;
}
  </style>
