<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form label-width="120px">
          <el-form-item label="食品种类：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="种类描述：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="食品名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="食品详情：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="食品价格：">
            <el-input-number :min="10"></el-input-number>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">立即创建</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'addgoods'
  }
</script>
<style lang="scss"></style>