<template>
  <div class="col s12">
    <h3 class="header">
      {{ post.title }}
    </h3>
    <div class="card horizontal">
      <div class="card-stacked">
        <div class="card-content">
          <span>{{ new Date(post.date).toDateString() }}</span>
          <hr />
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
