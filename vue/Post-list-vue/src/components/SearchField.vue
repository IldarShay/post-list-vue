<template>
  <div class="input-field" style="width: 40%">
    <input
      id="search"
      type="text"
      class="validate"
      v-model="modelValue"
      @input="searchText"
    />
    <label for="search">Input title post</label>
  </div>
</template>

<script>
export default {
  name: "SearchField",
  methods: {
    searchText(e) {
      this.$emit("update:model-value", e.target.value);
    },
  },
};
</script>
<style scoped></style>
