<template>
  <div class="container">
    <h2>Create post</h2>
    <form class="">
      <div class="row">
        <div class="input-field col s4">
          <input
            placeholder=""
            id="title"
            type="text"
            class="validate"
            v-model="title"
          />
          <label for="title">Title</label>
        </div>
        <div class="input-field col s8">
          <input id="body" type="text" class="validate" v-model="body" />
          <label for="body">Description</label>
        </div>
      </div>
    </form>
    <button class="btn" @click.prevent="createPost">Create</button>
    <div class="post" v-for="(post, i) in posts" :key="i">
      <div class="col s12">
        <h2 class="header">{{ post.title }}</h2>
        <div class="card horizontal">
          <div class="card-stacked">
            <div class="card-content">
              <p>
                {{ post.body }}
              </p>
            </div>
          </div>
        </div>
      </div>
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
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
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
