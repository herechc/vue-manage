<template>
  <div class="app-main">
    <transition name="fade" mode="out-in">
      <router-view :key="key"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'appMain',
  computed: {
    key () {
      return this.$router.name !== undefined ? this.$router.name + +new Date() : this.$router + +new Date()
    }
  }
}
</script>
<style lang="scss" scope></style>