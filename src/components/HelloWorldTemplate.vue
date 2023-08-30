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
      <se-block-header>展开的列表</se-block-header>
      <se-block-content option="fill">

        <se-list>
          <se-list-item item="选项一" 
          icon="user_standard" 
          icon-color="primary" 
          description="I have a description"
          @click="goto('/helloElementUI')">
          </se-list-item>
          <se-list-item item="选项二" icon="user_standard" icon-color="primary">
          </se-list-item>
          <se-list-item item="不带图标的基础选项"> </se-list-item>
          <se-list-group item="列表组即列表下还有列表" icon="action_expand_all" icon-color="primary" description="I'm selected when collapsed">
            <se-list-item item="选项一" selected icon="action_settings2" icon-color="primary" description="I have a description">
            </se-list-item>
            <se-list-item item="不带描述的选项二" icon="action_favourite_library" icon-color="primary">
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
            <se-list-item item="不带图标的选项3"  icon="action_compare" icon-color="primary" description="I'm here too"> </se-list-item>
          </se-list-group>
          <se-list-group item="simple collapse">
            <se-list-item item="No icon, not selected"> </se-list-item>
          </se-list-group>
        </se-list>
      </se-block-content>
    </se-block>
    <se-divider option="vertical"></se-divider>
    <se-block divider>
      <se-block-header>
        H3 Buttons and Form
    <div slot="end">
          <se-icon option="button" color="alternative">favourites_addto</se-icon>
          <se-dropdown alignment="right">
            <se-icon slot="trigger" option="button" color="alternative">other_vertical</se-icon>
            <se-list option="dropdown">
              <se-list-item item="I'm selected"></se-list-item>
              <se-list-item item="my item 2 no description  with a long text"></se-list-item>
              <se-list-item item="my item 3 no icon"></se-list-item>
            </se-list>
          </se-dropdown>
        </div>
      </se-block-header>
      <se-block-content>
        <h1>My h1 string with a divider</h1>
        <se-divider></se-divider>
        <h2>My h2 string with a divider </h2>
        <se-divider></se-divider>
        <h3>My h3 string with a divider </h3>
        <se-divider></se-divider>
        <h4>My h4 string with a divider </h4>
        <se-divider></se-divider>
        <h5>My h5 string with a divider </h5>
        <se-divider></se-divider>
        <h6>My h6 string with a divider </h6>
        <se-divider></se-divider>
        <div style="display:flex; flex-wrap: wrap;">
          <se-tooltip position="left">
            <se-button option="raised" color="secondary" slot="tooltip">Tooltip Left</se-button>
            Tooltip Left
          </se-tooltip>
          <se-button option="flat">standard</se-button>
          <se-button option="flat" color="alternative">alternative</se-button>
          <se-button option="flat" color="primary">primary</se-button>
          <se-button option="flat" color="secondary">secondary</se-button>
          <se-button icon="action_resize">Resize</se-button>
          <se-button option="outline">Outline</se-button>
          <se-button option="outline" color="alternative">Outline alternative</se-button>
          <se-button option="outline" color="primary">Outline primary</se-button>
          <se-button option="outline" color="secondary">Outline secondary</se-button>
          <se-button icon="action_resize" icon-only></se-button>
          <se-chip value="Chip 01"></se-chip>
          <se-chip value="Chip 02" can-close ></se-chip>
         <!--  <se-chip value="with icon" selected> <se-icon slot="start" color="error">notification_critical</se-chip> -->
          <se-link url="http://google.com">Link to Google</se-link>
          <se-link url="http://google.com" option="external">External Link to Google</se-link>
          <se-button option="flat">Flat</se-button>
          <se-button option="flat" color="primary">FlatGreen</se-button>
          <se-button option="raised">Raised</se-button>
          <se-button option="raised" color="primary">RaisedGreen</se-button>
          <se-button option="text">Text</se-button>
          <se-button option="text" color="primary">Primary</se-button>
          <se-radio-group value="left">
            <se-button value="left" icon-only><se-icon slot="icon" size="small" mirror="horizontal">arrow2_right</se-icon></se-button>
            <se-button value="right" icon-only><se-icon slot="icon" size="small" >arrow2_right</se-icon></se-button>
          </se-radio-group>
          <se-radio-group value="second">
            <se-button value="first" >Check1</se-button>
            <se-button value="second" >Check2</se-button>
            <se-button value="third">Check3</se-button>
          </se-radio-group>
        </div>
        <se-divider></se-divider>
        <se-form-field label="Input" required="true">
          <input type="text" />
        </se-form-field>
        <se-form-field label="Select" required="true" type="select">
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </se-form-field>
        <se-form-field label="Select the an album" required="true" option="stacked">
          <se-radio-group value="second">
            <se-radio value="first" label="Album 1"></se-radio>
            <se-radio value="second" label="Album 2"></se-radio>
            <se-radio value="third" label="Album 3"></se-radio>
          </se-radio-group>
        </se-form-field>

        <se-form-field label="This is my custom Checkbox.  It is unique." type="checkbox" required="true">
          <se-checkbox value="checkbox-value"></se-checkbox>
        </se-form-field>
        <se-form-field label="Input" required="true" option="stacked">
          <input type="text" />
        </se-form-field>
        <se-form-field label="Select" required="true" type="select" option="stacked">
          <select>
            <option>Stacked Option 1</option>
            <option>Stacked Option 2</option>
            <option>Stacked Option 3</option>
          </select>
        </se-form-field>
        <se-divider></se-divider>
        <se-button onclick="document.getElementById('dialog-simple-notitle').open = true" option="raised" >Dialog simple</se-button>
        <se-button onclick="document.getElementById('dialog-simple-title').open = true" option="raised" >Dialog title icon</se-button>
        <se-button onclick="document.getElementById('dialog-complex').open = true" option="raised" >Dialog complex</se-button>

      </se-block-content>
      <se-block-footer>
        <se-button onclick="document.getElementById('snackbar').open = true" option="raised">Open Snackbar</se-button>
      </se-block-footer>
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
