<template>
  <div>
    <div v-for="item in routes" :key="item.key">
      <el-menu-item :index="item.children[0].path" v-if="!item.hidden && item.noDropdown && item.children.length > 0">
        <template slot="title">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </template>
      </el-menu-item>
      <el-submenu :index="item.name" v-if="!item.noDropDown && !item.hidden">
        <template slot="title">
          <i :class="item.icon"></i>
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