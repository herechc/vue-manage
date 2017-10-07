<template>
  <div class="container">
    <el-row :gutter="20">
      <el-col :span="12" :offset="6">
        <el-form label-width="120px">
          <el-form-item label="店铺名称：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="详细地址：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="店铺简介：">
            <el-input></el-input>
          </el-form-item>
          <el-form-item label="店铺标语：">
            <el-input></el-input>
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
    name: 'addshop'
  }
</script>
<style lang="scss" scoped></style>
