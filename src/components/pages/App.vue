<template>
  <div id="app">
    <h1 class="joke-title">Joke List</h1>
    <JokeList />
  </div>
</template>

<script>
import JokeList from '../organisms/JokeList.vue';
import '../../styles/reset.css';

export default {
  name: 'App',
  components: {
    JokeList,
  },
};
</script>

<style>
body {
  font-family: 'Lato', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f9f9f9;
}
.joke-title {
  text-align: center;
  margin: 20px 0;
  color: #333;
  font-size: 2rem;

}
</style>
