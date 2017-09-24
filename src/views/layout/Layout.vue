<template>
  <div class="app-container">
    <sidebar class="sidebar-container"></sidebar>
    <div class="main-container">
       <navbar></navbar>
      <app-main></app-main> 
    </div>
  </div>
</template>
<script>
  import sidebar from 'views/layout/sidebar'
  import navbar from 'views/layout/navbar'
  import appMain from 'views/layout/appMain'
  export default {
    name: 'layout',
    components: {
      navbar,
      sidebar,
      appMain
    }
  }
</script>
<style lang="scss" scoped>
@import 'src/styles/mixin.scss';
.app-container{
  @include clearfix;
  position: relative;
  width:100%;
  height:100%;
  .sidebar-container{
    width:180px;
    height:100%;
    position:fixed;
    top:0;
    left: 0;
    z-index: 1001;
    overflow:hidden;
  }
  .main-container{
    min-height:100%;
    margin-left:180px;
    
  }
}
</style>
