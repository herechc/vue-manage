<template>
  <div class="container">
    <el-table :data="tablelist" fit>
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-position="left" inline class="table-expand-custom" >
            <el-form-item label="用户名">
              <span>{{props.row.userName}}</span>
            </el-form-item>
             <el-form-item label="店铺名称">
              <span>{{props.row.cafeName}}</span>
            </el-form-item>
            <el-form-item label="收货地址">
              <span>{{props.row.getAdr}}</span>
            </el-form-item>
            <el-form-item label="店铺ID">
              <span>{{props.row.cafeId}}</span>
            </el-form-item>
             <el-form-item label="店铺地址">
              <span>{{props.row.cafeAdr}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="店铺ID" prop="cafeId"></el-table-column>
      <el-table-column label="总价格" prop="totalPrice"></el-table-column>
      <el-table-column label="订单状态" prop="orderStatus"></el-table-column>
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
    name: 'orderlist',
    data() {
      return {
        tablelist: [{
          userName: 'tsat',
          cafeName: 'asdfsf',
          getAdr: 'sfas',
          cafeId: 'asfasdfas',
          cafeAdr: 'sfaaa',
          totalPrice: '121',
          orderStatus: 'sfd'
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