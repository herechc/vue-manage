<template>
  <div class="container">
    <el-table :data="tablelist" fit>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="table-expand-custom" >
            <el-form-item label="食品名称">
              <span>{{props.row.foodName}}</span>
            </el-form-item>
             <el-form-item label="餐馆名称">
              <span>{{props.row.cafeName}}</span>
            </el-form-item>
             <el-form-item label="食品ID">
              <span>{{props.row.foodId}}</span>
            </el-form-item>
             <el-form-item label="餐馆ID">
              <span>{{props.row.cafeId}}</span>
            </el-form-item>
            <el-form-item label="食品介绍">
              <span>{{props.row.intro}}</span>
            </el-form-item>
            <el-form-item label="餐馆地址">
              <span>{{props.row.cafeAdr}}</span>
            </el-form-item>
             <el-form-item label="食品评分">
              <span>{{props.row.score}}</span>
            </el-form-item>
             <el-form-item label="月销售">
              <span>{{props.row.sales}}</span>
            </el-form-item>
             <el-form-item label="食品分类">
              <span>{{props.row.category}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="食品名称" prop="foodName"></el-table-column>
      <el-table-column label="食品介绍" prop="intro"></el-table-column>
      <el-table-column label="评分" prop="score"></el-table-column>
      <el-table-column label="操作" >
        <template scope="scope">
          <el-button size="small" >编辑</el-button>
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
    name: 'foodlist',
    data() {
      return {
        tablelist: [{
          foodName: 'teat',
          cafeName: 'tsad',
          adress: '北京',
          intro: '似懂非懂反反复复',
          foodId: '1',
          cafeAdr: 'tsa',
          cafeId: '1',
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