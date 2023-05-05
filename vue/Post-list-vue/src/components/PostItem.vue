<template>
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
      <button
        @click="$emit('remove', post)"
        class="waves-effect waves-grey darken-3 btn-flat deep-orange darken-3"
        style="margin: 15px 20px"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostItem",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped></style>
