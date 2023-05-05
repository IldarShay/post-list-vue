<template>
  <div class="container">
    <h2>Create post</h2>
    <post-form @create="createPost"></post-form>
    <post-list :posts="posts" @remove="removePost"> </post-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JS",
          body: "Description 1",
        },
        {
          id: 2,
          title: "TS",
          body: "Description 2",
        },
        {
          id: 3,
          title: "CSS",
          body: "Description 3",
        },
        {
          id: 4,
          title: "HTML",
          body: "Description 4",
        },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id != post.id);
    },
  },
};
</script>
<style>
@import "~materialize-css/dist/css/materialize.min.css";
.container {
  width: 90%;
}
</style>
