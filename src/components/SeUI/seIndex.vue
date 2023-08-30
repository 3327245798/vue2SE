<template>
 <se-app>
  <se-container padding="large" display="flex" style="width:100%" >
    <se-block style="width:30%;background:red">左侧</se-block>
     <se-block style="width:70%;background:blue">右侧</se-block>
    </se-container >
  </se-app>
</template>

<script>
export default {

}
</script>
<style lang="scss">
$se-icon-folder: "~@se/icons/fonts";
$se-generate-font-class: "false";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles-technical";
// OR 
// @import "~@se/fonts/scss/styles-website";
</style>