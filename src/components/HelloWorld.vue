<template>
  <div class="hello">
     <se-header app-title="我的SE实践">
    <div slot="end">
      <se-dropdown alignment="right">
        <se-button slot="trigger" option="inherit" icon="user_standard" icon-color="primary">WangZhe</se-button>
        <se-list option="dropdown">
          <se-list-item item="About"></se-list-item>
          <se-list-item item="Language"></se-list-item>
          <se-divider></se-divider>
          <se-list-item item="Logout"></se-list-item>
        </se-list>
      </se-dropdown>
    </div>
    <se-sidemenu id="app-sidemenu">
      <se-sidemenu-item item="Project">
        <se-block option="fill">
          <se-block-header>some widget design</se-block-header>
          <se-block-content option="fill">
            <se-container option="card" display="block">
              <se-block>
                <se-block-header>
                  H3 Buttons and Form
              <div slot="end">
                    <se-icon option="button" color="alternative">other_vertical</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>test</se-block-content>
              </se-block>
              <se-block>
                <se-block-header>
                  H3 Buttons and Form
              <div slot="end">
                    <se-icon option="button" color="alternative">other_vertical</se-icon>
                  </div>
                </se-block-header>
                <se-block-content>test</se-block-content>
              </se-block>
            </se-container>
          </se-block-content>
          <se-block-footer>
            <se-button option="raised" color="primary">RaisedGreen</se-button>
          </se-block-footer>
        </se-block>
      </se-sidemenu-item>
      <se-sidemenu-item item="About">
        <se-about app-title="Test Advisor" version="1.2.3" image-url="url(https://www.nozominetworks.com/wp-content/uploads/2019/01/Nozomi-Networks-and-Schneider-Electric-Partner-Secure-Industrial-Infrastructure.jpg)"></se-about>
      </se-sidemenu-item>
      <se-sidemenu-item item="Save"></se-sidemenu-item>
    </se-sidemenu>
  </se-header>
  <se-tabbar color="primary">
    <nav><a class="active">Home</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a><a>Another</a></nav>
    <nav slot="end">
      <se-button color="alternative" option="outline"> alternative outline</se-button>
    </nav>
  </se-tabbar>
  <se-container>
    <se-block width="250px" divider>
     
      <se-block-content option="fill">
        <se-list option="dropdown">
           <se-list-group item="布局组件" icon="action_expand_all" icon-color="primary" >
          <se-list-item item="App" 
          icon="it_smartphone" 
          icon-color="primary" 
          @click="goto('/appSE')"
        >
          </se-list-item>
          <se-list-item item="APP Container" icon="segment_biscuit" icon-color="primary" @click="goto('/containerSE')">
          </se-list-item>
          <se-list-item item="APP Block" icon="window_grid_uniform" icon-color="primary" @click="goto('/blockSE')" > </se-list-item>
           </se-list-group>
          <se-list-group item="表单组件" icon="action_expand_all" icon-color="primary" >
            <se-list-item item="表单" selected icon="action_settings2" icon-color="primary" @click="goto('/formField')" >
            </se-list-item>
            <se-list-item item="有子选项的列表项" icon="action_favourite_library" icon-color="primary" >
              <se-dropdown alignment="right">
                <se-icon slot="trigger" option="button" color="none">other_vertical</se-icon>
                <se-list option="dropdown">
                  <se-list-item item="下拉列表1"></se-list-item>
                  <se-list-item item="My Site 2"></se-list-item>
                  <se-divider></se-divider>
                  <se-list-item item="My Site 3"></se-list-item>
                </se-list>
              </se-dropdown>
            </se-list-item>
            <se-list-item item="按钮等组件"  icon="action_compare" icon-color="primary" @click="goto('/buttonSE')"> </se-list-item>
          </se-list-group>
            <se-list-group item="数据组件" icon="action_expand_all" icon-color="primary" >
          <se-list-item item="表格及分页" 
          icon="open_book" 
          icon-color="primary" 
          @click="goto('/tableSE')">
          </se-list-item>
          <se-list-item item="骨架屏" icon="user_standard" icon-color="primary" @click="goto('/skeletonSE')">
          </se-list-item>
          <se-list-item item="步骤条" icon="action_next" icon-color="primary" @click="goto('/stepperSE')" > </se-list-item>
           </se-list-group>
          <se-list-group item="simple collapse" >
            <se-list-item item="No icon, not selected" @click="goto('/helloWorldTemplate')"> </se-list-item>
          </se-list-group>
        
           <se-list-group item="测试组件" icon="action_expand_all" icon-color="primary" >
          <se-list-item item="elementui组件" 
          icon="action_new_with_wizzard" 
          icon-color="primary" 
         
          @click="goto('/helloElementUI')">
          </se-list-item>
          <se-list-item item="自己封装组件测试" icon="action_ruler" icon-color="primary" @click="goto('/elementTest')">
          </se-list-item>
           <se-list-item item="长表格分页渲染" icon="action_bold" icon-color="primary" @click="goto('/longTableTest3')">
           </se-list-item>
           </se-list-group>
        </se-list>
      </se-block-content>
    </se-block>
    <se-divider option="vertical"></se-divider>
    <se-block divider>
      
      <router-view></router-view>
    </se-block>
  </se-container>
  <se-dialog id="dialog-simple-notitle" color="alternative" size="small">
    <se-dialog-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</se-dialog-content>
    <se-dialog-footer>
      <se-button onclick="document.getElementById('dialog-simple-notitle').open = false">OK</se-button>
    </se-dialog-footer>
  </se-dialog>
  <se-dialog id="dialog-simple-title" color="alternative">
    <se-dialog-header>My awesome title</se-dialog-header>
    <se-dialog-content icon="help_wired_flat">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</se-dialog-content>
    <se-dialog-footer>
      <se-button onclick="document.getElementById('dialog-simple-title').open = false">OK</se-button>
    </se-dialog-footer>
  </se-dialog>
  <se-dialog id="dialog-complex">
    <se-dialog-header>My awesome title</se-dialog-header>
    <se-dialog-content>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</se-dialog-content>
    <se-dialog-footer>
      <se-button onclick="document.getElementById('dialog-complex').open = false">Cancel</se-button>
      <se-button onclick="document.getElementById('dialog-complex').open = false">OK</se-button>
    </se-dialog-footer>
  </se-dialog>
  <se-snackbar id="snackbar" type="warning" icon="information_stroke" message="my message" can-close="true" action-text="Dismiss"></se-snackbar>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods:{
    goto(url){
this.$router.push(url)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped >

$se-icon-folder: "~@se/icons/fonts";
$se-generate-font-class: "false";
@import "~@se/icons/scss/styles";
$se-fonts-path: "~@se/fonts/fonts";
@import "~@se/fonts/scss/styles-technical";
// OR 
// @import "~@se/fonts/scss/styles-website";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
