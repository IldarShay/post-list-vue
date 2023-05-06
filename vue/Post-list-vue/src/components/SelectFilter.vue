<template>
  <div class="input-field col">
    <select ref="select" :value="modelValue" @change="changeFilter">
      <option value="" disabled selected>Choose your filter</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.name }}
      </option>
    </select>
    <label><strong>Filter select</strong></label>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  name: "SelectFilter",
  mounted() {
    M.FormSelect.init(this.$refs.select);
  },
  methods: {
    changeFilter(e) {
      this.$emit("update:model-value", e.target.value);
    },
  },
};
</script>
<style></style>
