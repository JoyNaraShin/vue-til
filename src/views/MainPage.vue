<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <div v-if="isLoading">Loading...</div>
      <LoadingSpinner v-if="isLoading"></LoadingSpinner>
      <ul>
        <PostListItem
          v-for="post in postItems"
          :key="post._id"
          :item="post"
        ></PostListItem>
      </ul>
    </div>
    <router-link to="/add" class="create-button">
      <i class="ion-md-add"></i>
    </router-link>
  </div>
</template>

<script>
import { fetchPost } from '@/api/posts';
import PostListItem from '@/components/posts/PostListItem';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
export default {
  components: { PostListItem, LoadingSpinner },
  data() {
    return {
      postItems: [],
      isLoading: false,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.isLoading = true;
      const { data } = await fetchPost();
      this.isLoading = false;
      this.postItems = data.posts;
      console.log(data);
    },
  },
};
</script>

<style></style>
