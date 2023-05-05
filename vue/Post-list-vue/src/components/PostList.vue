<template>
  <post-item
    v-if="posts.length > 0"
    :post="post"
    v-for="(post, i) in posts"
    :key="post.id"
    @remove="$emit('remove', post)"
  >
  </post-item>
  <h3 v-else>Post list is empty ...</h3>
</template>

<script>
export default {
  name: "PostList",

  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style></style>
