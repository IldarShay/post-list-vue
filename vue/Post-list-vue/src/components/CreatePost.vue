<template>
  <div>
    <div class="post" v-for="(post, i) in posts" :key="i">
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
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
          title: "JS",
          body: "Description 2",
        },
        {
          id: 3,
          title: "JS",
          body: "Description 3",
        },
        {
          id: 4,
          title: "JS",
          body: "Description 4",
        },
      ],
    };
  },
  methods: {},
};
</script>
<style></style>
