<template>
  <el-autocomplete
    v-model="state"
    :fetch-suggestions="querySearchAsync"
    :trigger-on-focus="false"
    placeholder="Search user nickname"
    :debounce=1000
    @select="handleSelect"
  >
  <i slot="prefix" class="el-input__icon el-icon-search"></i>
  </el-autocomplete>
</template>
<script>
export default {
  data() {
    return {
      state: '',
      timeout: null
    };
  },
  methods: {
    querySearchAsync(queryString, cb) {
      var results = [
        {'value': 'deepweller'}, {'value': 'happygram'}
      ];

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 2000 * Math.random());
    },
    handleSelect(item) {
      this.state = '';
      this.$router.push(`/home/main/${item.value}`);
    }
  }
};
</script>
