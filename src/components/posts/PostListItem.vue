<template>
  <li>
    <div class="post-title">
      {{ item.title }}
    </div>
    <div class="post-contents">
      {{ item.contents }}
    </div>
    <div class="post-time">
      {{ item.createdAt }}
      <i class="icon ion-md-create" @click="routeEditPage"></i>
      <i class="icon ion-md-trash" @click="deletePost"></i>
    </div>
  </li>
</template>

<script>
import { deletePost } from '@/api/posts';
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    async deletePost() {
      if (confirm('You want to delete it?')) {
        await deletePost(this.item._id);
        this.$emit('refresh');
      }
    },
    routeEditPage() {
      const id = this.item._id;
      this.$router.push(`post/${id}`);
    },
  },
};
</script>

<style></style>
