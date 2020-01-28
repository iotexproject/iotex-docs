<template>
  <el-row>
    <el-col>
      <el-form
        :inline="true"
        :model="formData"
        :show-message="false"
        size="small"
        :inline-message="true"
      >
        <el-form-item>
          <el-input v-model="formData.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">订阅</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        email: null
      }
    };
  },
  computed: {
    data() {
      return this.$page.frontmatter;
    }
  },
  mounted() {},
  methods: {
    onSubmit() {}
  },
  filters: {}
};
</script>

<style lang="stylus"></style>
