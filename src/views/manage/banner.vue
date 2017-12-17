<template>
  <div class="container">
    <div class="header-btn">
      <el-button type="primary" @click="handleCreate">新建</el-button>
    </div>
    <div class="banner-list">
      <div class="list" v-for="item in imglist" :key="item.id">
        <img :src="baseUrlImg + item.image_path">
        <el-button type="danger" class="banner-btn" @click="handleDel(item.id)">删除</el-button>
      </div>
    </div>
    <el-dialog title="添加焦点图" :visible.sync="addBanDialogVisible" class="customDialog small">
      <el-form label-width="120px" :model="formData" ref='form'>
        <el-form-item label="上传焦点图：" >
          <el-upload class="avatar-uploader" 
            list-type="picture-card" 
            :action="baseUrl + 'addimg/banner'" 
            :show-file-list="false" 
            :on-success="handleAvatarSuccess" 
            :before-upload="beforeAvatraUpload"
            :with-credentials="true">
            <img v-if="formData.image_path" :src="baseUrlImg + formData.image_path" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <span slot="footer">
        <el-button type="primary" @click="handleUPload">确定</el-button>
        <el-button @click="addBanDialogVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { baseUrl, baseUrlImg } from 'utils/config'
export default {
  name: 'banner',
  data() {
    return {
      imglist: [],
      // 焦点图
      addBanDialogVisible: false,
      // 表单
      formData: {
        // 图片
        image_path: ''
      },
      // url
      baseUrl,
      // urlimg
      baseUrlImg
    }
  },
  mounted() {
    this.getlist()
  },
  methods: {
    getlist() {
      this.$api.fetchBanner().then(res => {
        this.imglist = res.data.list
        // console.log(res.data)
      })
    },
    handleCreate() {
      // 新建
      this.addBanDialogVisible = true
      this.formData.image_path = ''
    },
    handleDel(id) {
      this.$confirm('是否删除焦点图', '删除', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(_ => {
        this.$api.delBanner(id).then(res => {
          if (res.data.code === 1) {
            this.$message.success(res.data.message)
            this.getlist()
          } else {
            this.$message.error(res.data.message)
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      }).catch(_ => {
        this.$message.info('取消')
      })
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      // 上传成功
      if (res.status === 1) {
        this.formData.image_path = res.image_path
      } else {
        this.$message.error(res.message)
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
    handleUPload() {
      // 上传图片
      this.$api.addBanner(this.formData).then(res => {
        console.log(res)
        let data = res.data
        if (data.code === 1) {
          this.$message.success(data.message)
          this.getlist()
        } else {
          this.$message.error(data.message)
        }
        this.addBanDialogVisible = false
      }).catch(err => {
        this.$message.error(err.message)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.banner-list{
  display:flex;
  padding:0 20px;
  flex-wrap:wrap;
  .list{
    width:250px;
    margin-right:10px;
    margin-bottom:10px;
    border-radius: 4px;
    border: 1px solid #e6ebf5;
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    color: #2d2f33;
    height:320px;
    text-align:center;
    img{
      margin-top:10px;
      max-width:250px;
      max-height:280px;
    }
    .banner-btn{
      margin:7px 0 0 7px;
    }
  }
}

</style>