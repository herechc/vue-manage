<template>
  <el-menu mode="vertical" theme="dark" unique-opened :default-active="$route.path" router>
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>
<script>
import sidebarItem from './sidebarItem'
import { routermap } from 'router'
export default {
  name: 'sidebar',
  components: { sidebarItem },
  data () {
    return {
      routes: routermap
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
