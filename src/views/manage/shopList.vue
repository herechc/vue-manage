<template>
  <div class="container">
    <el-table :data="tablelist" fit>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="table-expand-custom" >
            <el-form-item label="店铺名称">
              <span>{{props.row.name}}</span>
            </el-form-item>
             <el-form-item label="店铺地址">
              <span>{{props.row.adress}}</span>
            </el-form-item>
             <el-form-item label="店铺介绍">
              <span>{{props.row.intro}}</span>
            </el-form-item>
             <el-form-item label="店铺ID">
              <span>{{props.row.id}}</span>
            </el-form-item>
             <el-form-item label="联系电话">
              <span>{{props.row.mobile}}</span>
            </el-form-item>
             <el-form-item label="评分">
              <span>{{props.row.score}}</span>
            </el-form-item>
             <el-form-item label="销售量">
              <span>{{props.row.sales}}</span>
            </el-form-item>
             <el-form-item label="分类">
              <span>{{props.row.category}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" prop="name"></el-table-column>
      <el-table-column label="店铺地址" prop="adress"></el-table-column>
      <el-table-column label="店铺介绍" prop="intro"></el-table-column>
      <el-table-column label="操作" >
        <template scope="scope">
          <el-button size="small" >编辑</el-button>
          <el-button size="small" >添加食品</el-button>
          <el-button size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
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
    name: 'shoplist',
    data() {
      return {
        tablelist: [{
          name: 'teat',
          adress: '北京',
          intro: '似懂非懂反反复复',
          id: '1',
          mobile: '13584884525',
          score: '4.5',
          sales: '144',
          category: '江浙小吃'
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