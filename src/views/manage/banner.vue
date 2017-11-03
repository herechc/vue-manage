<template>
  <div class="container">
    <div class="banner-list">
      <div class="list" v-for="item in imglist" :key="item.id">
        <img :src="baseUrlImg + item.image_path">
        <el-button type="danger" class="banner-btn" @click="handleDel(item.id)">删除</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import { baseUrlImg } from 'utils/config'
export default {
  name: 'banner',
  data() {
    return {
      baseUrlImg,
      imglist: []
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
          }
        }).catch(err => {
          this.$message.error(err.message)
        })
      }).catch(_ => {
        this.$message.info('取消')
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