<template>
  <div class="hello">
    <se-block divider>
      <se-block-header> se-app的使用说明 </se-block-header>
      <se-block-content >
        <h4 >
          se应用程序组件是所有内容的父容器。 它承载<el-tag type="success"
            >se-container</el-tag>
          ，然后承载一个或多个<el-tag type="success">se-block</el-tag>。
          该组件的主要用途是定义属于Technical或SE.com的应用程序类别。
          这将主要决定将使用哪种字体。
        </h4>
        <se-divider></se-divider>
        <h4>
          所有应用程序都从<el-tag type="success">se-app</el-tag>组件启动。
          该组件表示应用程序，并导入开发人员可以使用的所有全局样式。
          它还包括一个resest css，用于删除不同浏览器上的意外行为。
        </h4>
        <pre v-highlight="seappcode"><code></code></pre>
        <se-divider></se-divider>
        <h4>包括一些方便的类</h4>
        <pre v-highlight="classes"><code></code></pre>
      </se-block-content>
    </se-block>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seappcode: `<body>
  <se-app>
      ...
  </se-app>
</body>`,
      classes: `/* Font Size*/
.strong, .bold
.light
.thin

/* color and background color (they all use css variable to be consistent with the theme */
.color-standard, .bg-standard
.color-alternative, .bg-alternative
.color-primary, .bg-primary
.color-secondary, .bg-secondary
.color-standard-contrast, .bg-standard-contrast
.color-alternative-contrast, .bg-alternative-contrast
.color-primary-contrast, .bg-primary-contrast
.color-secondary-contrast, .bg-secondary-contrast`,
    };
  },
  methods: {
    goto(url) {
      this.$router.push(url);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped  >
se-block{
  p,h1,h2,h3,h4,h5,h6{
    text-align: left;
  }
}
</style>
