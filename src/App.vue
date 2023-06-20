<template>
  <div class="container">
    <h2>My favorite posts</h2>
    <div style="display: flex; justify-content: space-between">
      <post-form @create="createPost" style="margin-top: 25px"></post-form>
      <search-field v-model="searchText"></search-field>
      <select-filter
        v-model="selectedSort"
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
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
      isPostsLoading: false,
      selectedSort: "",
      searchText: "",
      sortOptions: [
        {
          value: "title",
          name: "On title",
        },
        {
          value: "body",
          name: "On description",
        },
      ],
      page: 1,
      limit: 10,
      totalPage: 0,
      url: "https://jsonplaceholder.typicode.com/posts",
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id != post.id);
    },
    changePage(pageNum) {
      this.page = pageNum;
      this.loadingPosts();
    },
    async loadingPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios(
          `${this.url}?_limit=${this.limit}&_page=${this.page}`
        );
        this.totalPage = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
        this.posts.forEach((res) => {
          return (res.date = Date.now());
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    searchSelectedSort() {
      return this.sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(this.searchText);
      });
    },
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
