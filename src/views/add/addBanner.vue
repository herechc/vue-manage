<template>
  <div class="container">
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form label-width="120px" :model="formData">
          <el-form-item label="上传焦点图：">
            <el-upload class="avatar-uploader" 
              list-type="picture-card" 
              :action="baseUrl + '/addimg/banner'" 
              :show-file-list="false" 
              :on-success="handleAvatarSuccess" 
              :before-upload="beforeAvatraUpload">
              <img v-if="formData.image_path" :src="baseUrlImg + formData.image_path" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="">
            <el-button type="primary" @click="handleUPload">上传</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import { baseUrl, baseUrlImg } from 'utils/config'
  export default {
    name: 'addBanner',
    data() {
      return {
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
      // this.baseUrl = baseUrl
      // this.baseUrlImg = baseUrlImg
    },
    methods: {
      handleAvatarSuccess(res, file) {
        // 上传成功
        if (res.status === 1) {
          this.formData.image_path = res.image_path
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
      handleUPload() {
        // 上传图片
        this.$api.addBanner(this.formData).then(res => {
          let data = res.data
          if (data.code === 1) {
            this.$message.success(data.message)
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>