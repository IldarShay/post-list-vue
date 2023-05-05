<template>
  <div>
    <button data-target="modal1" class="btn modal-trigger">
      Create new post
    </button>
    <div class="dialog">
      <!-- Modal Structure -->
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h3>New post</h3>
          <form>
            <div class="col">
              <div class="input-field col s2">
                <input
                  placeholder=""
                  id="title"
                  type="text"
                  class="input"
                  v-model="post.title"
                />
                <label for="title">Title</label>
              </div>
              <div class="input-field col s2">
                <textarea
                  id="body"
                  class="materialize-textarea"
                  v-model="post.body"
                />
                <label for="body">Description</label>
              </div>
              <button
                class="btn waves-effect modal-close"
                @click.prevent="createPost"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostForm",
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.title = "";
      this.body = "";
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
  mounted() {
    M.Modal.init(document.querySelector("#modal1"), {
      startingTop: "14%",
      endingTop: "25%",
    });
  },
};
</script>
<style></style>
