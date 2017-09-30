<template>
  <div class="container">
    <el-table :data="tablelist" fit>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="registerTime" label="注册时间"></el-table-column>
      <el-table-column prop="adress" label="地址"></el-table-column>
      <el-table-column prop="role" label="权限"></el-table-column>
    </el-table>
    <div class="pagination" v-if="total">
      <el-button class="first"  :disabled="listQuery.page === 1">首页</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :total="total" :page-size="listQuery.size" :current-page.sync="listQuery.page">
      </el-pagination>
      <el-button class="end"  :disabled="listQuery.page === Math.ceil(total / listQuery.size)">末页</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'adminlist',
    data() {
      return {
        tablelist: [{
          name: 'sata',
          registerTime: 'sfafs',
          adress: 'asdfadd',
          role: 'sfaaaaaa'
        }],
        listQuery: {
          page: 1,
          size: 8
        },
        total: 8
      }
    },
    methods: {
      handleCurrentChange() {
        console.log(23)
      }
    }
  }
  
</script>
<style lang="scss" scoped></style>