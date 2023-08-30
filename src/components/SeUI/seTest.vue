<template>

   <se-app>
    <se-checkbox 
      option="switch" 
     
      :selected="myValue"
    ></se-checkbox>
    {{ myValue }}
    <se-container display="flex" padding="large">
  <se-block style="background:red">1</se-block>
  <se-block>2</se-block>
  <se-block>3</se-block>
  <se-block>4</se-block>
  <se-block>5</se-block>
  <se-block>6</se-block>
  <se-block>7</se-block>
  <se-block>8</se-block>
</se-container>
  <se-container display="grid" padding="large">
  <se-block>1</se-block>
  <se-block>2</se-block>
  <se-block>3</se-block>
  <se-block>4</se-block>
  <se-block>5</se-block>
  <se-block>6</se-block>
  <se-block>7</se-block>
  <se-block>8</se-block>
</se-container>
  </se-app>
</template>

<script>
export default {
    data(){
        return {
            myValue:true
        }
    }

}
</script>

<style lang="scss" scoped>
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}
</style>