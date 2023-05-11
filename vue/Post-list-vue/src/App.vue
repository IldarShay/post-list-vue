<template>
  <div class="container">
    <h2>My favorite posts</h2>
    <div style="display: flex; justify-content: space-between">
      <post-form @create="createPost" style="margin-top: 25px"></post-form>
      <search-field
        :model-value="searchText"
        @update:model-value="setSearchText"
      ></search-field>
      <select-filter
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      ></select-filter>
    </div>
    <post-list
      v-if="!isPostsLoading"
      :posts="searchSelectedSort"
      @remove="removePost"
    >
    </post-list>
    <load-component v-else> </load-component>
    <ul class="pagination" style="margin-left: auto">
      <li
        v-for="pageNum in totalPage"
        :key="pageNum"
        :class="{
          active: page === pageNum,
          'waves-effect': page != pageNum,
        }"
        @click="changePage(pageNum)"
      >
        <a href="#!">{{ pageNum }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      loadingPosts: "post/loadingPosts",
      changePage: "post/changePage",
    }),
    ...mapMutations({
      setPage: "post/setPage",
      setSearchText: "post/setSearchText",
      setSelectedSort: "post/setSelectedSort",
      createPost: "post/createPost",
      removePost: "post/removePost",
    }),
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostsLoading: (state) => state.post.isPostsLoading,
      selectedSort: (state) => state.post.selectedSort,
      searchText: (state) => state.post.searchText,
      sortOptions: (state) => state.post.sortOptions,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPage: (state) => state.post.totalPage,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      searchSelectedSort: "post/searchSelectedSort",
    }),
  },
  watch: {
    page() {
      this.loadingPosts();
    },
  },
  mounted() {
    this.loadingPosts();
  },
};
</script>
<style>
@import "~materialize-css/dist/css/materialize.min.css";
/* .container {
  width: 90%;
} */
</style>
