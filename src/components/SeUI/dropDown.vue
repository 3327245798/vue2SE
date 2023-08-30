<template>
  <se-dropdown alignment="left">
  <se-button slot="trigger">My Site 1</se-button>
  <se-list option="dropdown">
    <se-list-item item="My Site 1"></se-list-item>
    <se-list-item item="My Site 2"></se-list-item>
    <se-list-item item="My Site 3"></se-list-item>
  </se-list>
</se-dropdown>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}
</style>