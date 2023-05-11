import axios from "axios";
export const postModule = {
  state: () => {
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
      createdDate: null,
    };
  },
  getters: {
    sortedPosts(state) {
      return [...state.posts].sort((post1, post2) => {
        return post1[state.selectedSort]?.localeCompare(
          post2[state.selectedSort]
        );
      });
    },
    searchSelectedSort(state, getters) {
      return getters.sortedPosts.filter((post) => {
        return post.title.toLowerCase().includes(state.searchText);
      });
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPoostLoading = bool;
    },
    setSelectedSort(state, str) {
      state.selectedSort = str;
    },
    setSearchText(state, str) {
      state.searchText = str;
    },
    setPage(state, page) {
      state.page = page;
    },
    setTotalPage(state, totalPage) {
      state.totalPage = totalPage;
    },
    createPost(state, post) {
      state.posts.push(post);
    },
    removePost(state, post) {
      state.posts = state.posts.filter((p) => p.id != post.id);
    },
  },
  actions: {
    async loadingPosts({ state, commit }) {
      try {
        commit("setLoading", true);
        const response = await axios(
          `https://jsonplaceholder.typicode.com/posts?_limit=${state.limit}&_page=${state.page}`
        );
        commit(
          "setTotalPage",
          Math.ceil(response.headers["x-total-count"] / state.limit)
        );
        commit("setPosts", response.data);
        state.posts.forEach((post) => (post.date = Date.now()));
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoading", false);
      }
    },
    changePage({ state, commit }, pageNum) {
      state.page = pageNum;
      commit("loadingPosts", pageNum);
    },
  },
  namespaced: true,
};
