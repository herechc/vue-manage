<template>
  <div class="container">
    <el-table :data="tablelist" fit>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column  label="注册时间">
        <template scope="scope">
          {{scope.row.createAt | formatTime}}
        </template>
      </el-table-column>
      <el-table-column prop="role" label="权限">
        <template scope="scope">
          {{ scope.row.role | adminRole}}
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination" v-if="total">
      <el-button class="first"  :disabled="listQuery.page === 1">首页</el-button>
      <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :total="total" :page-size="listQuery.pageSize" :current-page.sync="listQuery.page">
      </el-pagination>
      <el-button class="end"  :disabled="listQuery.page === Math.ceil(total / listQuery.limit)">末页</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'adminlist',
    data() {
      return {
        tablelist: [],
        listQuery: {
          page: 1,
          pageSize: 20
        },
        total: 0
      }
    },
    mounted() {
      this.getList()
    },
    methods: {
      getList() {
        this.$api.getAdminList(this.listQuery).then(res => {
          if (res.data.code) {
            // console.log(res.data.list)
            this.tablelist = res.data.list
            this.total = res.data.total
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      },
      handleCurrentChange(val) {
        this.page = val
        this.getList()
      }
    }
  }
  
</script>
<style lang="scss" scoped></style>