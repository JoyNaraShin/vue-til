<template>
  <div>
    <div class="main list-container contents">
      <h1 class="page-header">Today I Learned</h1>
      <ul>
        <PostListItem
          v-for="post in postItems"
          :key="post._id"
          :item="post"
        ></PostListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchPost } from '@/api/index';
import PostListItem from '@/components/posts/PostListItem';
export default {
  components: { PostListItem },
  data() {
    return {
      postItems: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      //comiit
      const { data } = await fetchPost();
      this.postItems = data.posts;
      console.log(data);
    },
  },
};
</script>

<style></style>
