<template>
  <div>
    <div v-for="item in routes" :key="item.key">
      <el-menu-item :index="item.children[0].path" v-if="!item.hidden && item.children.length === 1">
        <template slot="title">
          <svg-icon :icon-class="item.icon" slot="icon"/>
          <span>{{item.name}}</span>
        </template>
      </el-menu-item>
      <el-submenu :index="item.name" v-else-if="!item.hidden">
        <template slot="title">
          <svg-icon :icon-class="item.icon" slot="icon"/>
          <span>{{item.name}}</span>
        </template>
        <div v-for="child in item.children" :key="child.key" v-if="!child.hidden" >
          <el-menu-item :index="child.path">
            {{child.name}}
          </el-menu-item>
        </div>
      </el-submenu>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'sidebarItem',
    props: {
      routes: {
        type: Array
      }
    }
  }
</script>
<style lang="scss" scoped></style>