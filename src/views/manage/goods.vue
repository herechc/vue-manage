<template>
  <div class="container">
    <div class="header-btn">
      <el-button type="primary" @click="addGoodsDialogVisible = true">新建</el-button>
    </div>
    <el-table :data="tablelist" fit class="customTable">
      <el-table-column type="expand">
        <template scope="props">
          <el-form label-width="80px" inline>
            <el-form-item label="图片：">
              <img :src="baseUrlImg + props.row.image_path" class="avatar">
            </el-form-item>
             <el-form-item label="详情图：">
              <div class="detail-img" v-for="item in props.row.picture">
                <img :src="baseUrlImg + item" class="avatar">
              </div>
            </el-form-item> 
            <el-form-item label="描述">
              <span>{{props.row.descr}}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="商品名称" prop="name"></el-table-column>
      <el-table-column label="商品分类" prop="category_name"></el-table-column>
      <el-table-column label="库存" prop="stock"></el-table-column>
      <el-table-column label="已售" prop="sold"></el-table-column>
      <el-table-column  label="价格" >
        <template scope="scope">
          <span>${{scope.row.price}}/斤</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <!-- <el-button size="small">编辑</el-button> -->
          <el-button size="small"  @click="handleDelGoods(scope.row.id)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--dialog 开始  -->
    <el-dialog title="添加商品"  :visible.sync="addGoodsDialogVisible"  class="customDialog small">
      <div class="content">
        <el-form label-width="120px" :model="listQuery">
          <el-form-item label="名字：">
            <el-input v-model="listQuery.name"></el-input>
          </el-form-item>
          <el-form-item label="图片：">
            <el-upload class="avatar-uploader" 
                list-type="picture-card" 
                :action="baseUrl + '/addimg/goods'" 
                :show-file-list="false" 
                :on-success="handleAvatarSuccess" 
                :before-upload="beforeAvatraUpload">
                <img v-if="listQuery.image_path" :src="baseUrlImg + listQuery.image_path" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
          </el-form-item>
          <el-form-item label="描述：">
            <el-input type="textarea" :row="2" :col="10" placeholder="请输入内容" v-model="listQuery.descr"></el-input>
          </el-form-item>
          <el-form-item label="价格：">
            <el-input v-model="listQuery.price"></el-input>
          </el-form-item>
          <el-form-item label="已售：">
            <el-input v-model="listQuery.sold"></el-input>
          </el-form-item>
          <el-form-item label="库存：">
            <el-input v-model="listQuery.stock"></el-input>
          </el-form-item>
          <el-form-item label="详情图：">
            <el-upload
              class="avatar-uploader"
              :action="baseUrl + '/addimg/goods'"
              :on-success="handlePictrue"
              :on-remove="handlePictrue"
              >
              <el-button size="small" type="primary">点击上传</el-button>
            </el-upload>
          </el-form-item>
          <el-form-item label="分类：">
            <el-select v-model="listQuery.category">
              <el-option v-for="item in catelist" :key="item.id" :value="item.id" :label="item.name"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <span slot="footer">
        <el-button type="primary" @click="handleAddGoods">确定</el-button>
        <el-button @click="addGoodsDialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
    <!--dialog 结束  -->
  </div>
</template>
<script>
  import { baseUrl, baseUrlImg } from 'utils/config'
  export default {
    name: 'goods',
    data() {
      return {
        addGoodsDialogVisible: false,
        listQuery: {
          picture: [],
          name: '',
          price: '',
          category: undefined,
          descr: '',
          image_path: '',
          stock: undefined,
          sold: undefined
        },
        tablelist: [],
        baseUrl,
        baseUrlImg,
        catelist: [],
        // 图片集
        fileList: []
      }
    },
    mounted() {
      this.getCate()
      this.getlist()
    },
    methods: {
      handleAddGoods() {
        this.$api.addGoods(this.listQuery).then(res => {
          // console.log(res)
          this.getlist()
          this.$message.success(res.data.message)
          this.addGoodsDialogVisible = false
        }).catch(err => {
          // console.log(err)
          this.$message.error(err.message)
        })
      },
      handleDelGoods(id) {
        this.$confirm('是否删除商品', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(_ => {
          this.$api.delGoods(id).then(res => {
            this.$message.success(res.data.message)
            this.getlist()
          }).catch(err => {
            this.$message.error(err.message)
          })
        }).catch(_ => {})
      },
      getCate() {
        this.$api.fetchCategory().then(res => {
          const data = res.data
          if (data.code === 1) {
            this.catelist = data.list
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      },
      getlist() {
        this.$api.fetchGoods().then(res => {
          const data = res.data
          // console.log(data)
          if (data.code === 1) {
            this.tablelist = data.list
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      },
      handleAvatarSuccess(res, file) {
        // 上传成功
        if (res.status === 1) {
          this.listQuery.image_path = res.image_path
        } else {
          this.$message.error('上传图片失败!')
        }
        // console.log(res)
      },
      beforeAvatraUpload(file) {
        // 上传前
        const isRightType = (file.type === 'image/jpeg') || (file.type === 'image/png')
        const isLt2M = file.size / 1024 / 1024 < 2
        if (!isRightType) {
          this.$message.error('上传头像图片只能是 JPG 格式!')
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!')
        }
        return isRightType && isLt2M
      },
      handlePictrue(res, file, fileList) {
        let list;
        list = !!fileList === true ? fileList : file
        this.listQuery.picture = list.map(item => {
          return item.response.image_path
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.detail-img{
  margin-right:10px;
  display:inline
}
</style>