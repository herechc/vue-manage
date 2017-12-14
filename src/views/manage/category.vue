<template>
  <div class="container">
    <div class="header-btn">
      <el-button type="primary" @click="addCateDialogVisible = true">新建</el-button>
    </div>
    <el-table :data="tablelist" fit class="customTable" >
      <el-table-column label="名字" prop="name" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template scope="scope">
          <!-- <el-button size="small">编辑</el-button> -->
          <el-button size="small" @click="handleDelCate(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--dialog 开始  -->
    <el-dialog title="添加分类"  :visible.sync="addCateDialogVisible"  class="customDialog small">
      <el-form label-width="120px" :model="listQuery">
        <el-form-item label="名字：">
          <el-input v-model="listQuery.name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="handleAddCate">确定</el-button>
        <el-button @click="addCateDialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <!--dialog 结束  -->
  </div>
</template>
<script>
  export default {
    name: 'category',
    data() {
      return {
        tablelist: [],
        listQuery: {
          name: ''
        },
        addCateDialogVisible: false
      }
    },
    mounted() {
      this.getlist()
    },
    methods: {
      handleAddCate() {
        this.$api.addCategory(this.listQuery).then(res => {
          this.getlist()
          if (res.data.code) {
            this.$message.success(res.data.message)
          } else {
            this.$message.error(res.data.message)
          }
          this.addCateDialogVisible = false
        }).catch(err => {
          this.$message.error(err.message)
        })
      },
      handleDelCate(id) {
        this.$confirm('是否删除分类', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(_ => {
          this.$api.delCategory(id).then(res => {
            if (res.data.code) {
              this.$message.success(res.data.message)
            } else {
              this.$message.error(res.data.message)
            }
            this.getlist()
          }).catch(err => {
            this.$message.error(err.message)
          })
        }).catch(_ => {})
      },
      getlist() {
        this.$api.fetchCategory().then(res => {
          const data = res.data
          // console.log(data)
          if (data.code === 1) {
            this.tablelist = data.list
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      }
    }
  }
</script>
<style lang="scss">

</style>