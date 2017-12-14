<template>
  <div class="container">
    <el-table :data="tablelist" fit style="width:100%">
      <el-table-column align="center" prop="name" label="用户名"></el-table-column>
      <el-table-column align="center" label="注册时间">
        <template scope="scope">
          {{scope.row.createAt | formatTime}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="id" label="id"></el-table-column>
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
    name: 'Umanage',
    data() {
      return {
        tablelist: [],
        listQuery: {
          page: 1,
          size: 8
        },
        total: 0
      }
    },
    mounted() {
      this.getlist()
    },
    methods: {
      getlist() {
        this.$api.getUserList(this.listQuery).then(res => {
          console.log(res.data.list)
          if (res.data.code) {
            this.tablelist = res.data.list
            this.total = res.data.total
          }
        })
      },
      handleCurrentChange() {
        console.log(2)
      }
    }
  }
</script>
<style lang="scss" scoped></style>
