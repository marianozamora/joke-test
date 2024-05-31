<!-- LikeButton.vue -->
<template>
    <button class="like-button" @click="like">
      <i class="fas fa-thumbs-up"></i> Like
    </button>
  </template>

<script>
export default {
  methods: {
    like() {
      this.$emit('like');
    },
  },
};
</script>

  <style scoped>
  .like-button {
    /* ... */
  }
  </style>
