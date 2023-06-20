<template>
  <div>
    <transition-group name="post-list">
      <post-item
        v-if="posts.length > 0"
        :post="post"
        v-for="(post, i) in posts"
        :key="post.id"
        @remove="$emit('remove', post)"
      >
      </post-item>
      <h3 v-else>Post list is empty ...</h3>
    </transition-group>
  </div>
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
<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.6s ease;
}
</style>
