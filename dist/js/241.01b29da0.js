"use strict";(self["webpackChunkvue2"]=self["webpackChunkvue2"]||[]).push([[241],{68241:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"hello"},[t("se-block",{attrs:{divider:""}},[t("se-block-header",[e._v(" SE中的表单域 ")]),t("se-block-content",[t("h4",[e._v("第一种表单域，不加stacked属性，是居中的")]),t("p",[e._v('class="with-icon"是'),t("el-tag",{attrs:{type:"success"}},[e._v("se-from-field")]),e._v("组件的一部分，并影响与其直接关联的输入框， 以便在输入框本身中添加图标。如果需要，"),t("el-tag",{attrs:{type:"success"}},[e._v("se-icon")]),e._v("也可用作按钮")],1),t("se-form-field",{attrs:{label:"This is my custom Checkbox.  It is unique.",type:"checkbox",required:"true"}},[t("se-checkbox",{attrs:{value:"checkbox-value"}})],1),t("se-form-field",{attrs:{label:"Input",required:"true"}},[t("input",{attrs:{type:"text"}})]),t("se-form-field",{attrs:{label:"Select",required:"true",type:"select"}},[t("select",[t("option",[e._v("Option 1")]),t("option",[e._v("Option 2")]),t("option",[e._v("Option 3")])])]),t("se-form-field",{attrs:{label:"Input with icon"}},[t("div",{staticClass:"with-icon"},[t("input",{attrs:{type:"search"}}),t("se-icon",{staticStyle:{"margin-left":"4px"},attrs:{size:"small"}},[e._v("action_search_stroke")])],1)]),t("se-form-field",{attrs:{label:"Autocomplete"}},[t("input",{attrs:{list:"marketSegmentList"}}),t("datalist",{attrs:{id:"marketSegmentList"}},[t("option",{attrs:{value:"react"}}),t("option",{attrs:{value:"stenciljs"}}),t("option",{attrs:{value:"angular"}}),t("option",{attrs:{value:"vuejs"}})])]),t("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[t("el-collapse-item",{staticStyle:{background:"black"},attrs:{title:"展开代码",name:"1"}},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:e.formField1,expression:"formField1"}]},[t("code")])])],1),t("se-divider"),t("h4",[e._v("第二种")]),t("se-form-field",{attrs:{id:"input-stacked-form",label:"Input",required:"true",option:"stacked"}},[t("input",{attrs:{type:"text"}})]),t("se-form-field",{attrs:{id:"select-form",label:"Select",required:"true",type:"select",option:"stacked"}},[t("select",[t("option",[e._v("Stacked Option 1")]),t("option",[e._v("Stacked Option 2")]),t("option",[e._v("Stacked Option 3")])])]),t("se-form-field",{attrs:{label:"Input with icon",option:"stacked"}},[t("div",{staticClass:"with-icon"},[t("input",{attrs:{type:"search"}}),t("se-icon",{staticStyle:{"margin-left":"4px"},attrs:{size:"small"}},[e._v("action_search_stroke")])],1)]),t("se-form-field",{attrs:{label:"Autocomplete",option:"stacked"}},[t("input",{attrs:{list:"marketSegmentList"}}),t("datalist",{attrs:{id:"marketSegmentList"}},[t("option",{attrs:{value:"react"}}),t("option",{attrs:{value:"stenciljs"}}),t("option",{attrs:{value:"angular"}}),t("option",{attrs:{value:"vuejs"}})])]),t("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[t("el-collapse-item",{staticStyle:{background:"black"},attrs:{title:"展开代码",name:"1"}},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:e.formField2,expression:"formField2"}]},[t("code")])])],1),t("se-divider"),t("h4",[e._v("第三种block")]),t("se-form-field",{attrs:{id:"input-stacked-form",block:"",label:"Input inlined",required:"true"}},[t("input",{attrs:{type:"text"}})]),t("se-form-field",{attrs:{id:"input-stacked-form",block:"",label:"Input stacked",required:"true",option:"stacked"}},[t("input",{attrs:{type:"text"}})]),t("el-collapse",{on:{change:e.handleChange},model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},[t("el-collapse-item",{staticStyle:{background:"black"},attrs:{title:"展开代码",name:"1"}},[t("pre",{directives:[{name:"highlight",rawName:"v-highlight",value:e.formField3,expression:"formField3"}]},[t("code")])])],1),t("se-divider")],1)],1)],1)},o=[],a={data(){return{activeNames:["1"],formField1:'<se-form-field\n  label="This is my custom Checkbox.  It is unique."\n  type="checkbox"\n  required="true"\n>\n  <se-checkbox value="checkbox-value"></se-checkbox>\n</se-form-field>\n<se-form-field label="Input" required="true">\n  <input type="text" />\n</se-form-field>\n<se-form-field label="Select" required="true" type="select">\n  <select>\n    <option>Option 1</option>\n    <option>Option 2</option>\n    <option>Option 3</option>\n  </select>\n</se-form-field>\n<se-form-field label="Input with icon">\n  <div class="with-icon">\n    <input type="search" />\n    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>\n  </div>\n</se-form-field>\n<se-form-field label="Autocomplete">\n  <input list="marketSegmentList" />\n  <datalist id="marketSegmentList">\n    <option value="react"></option>\n    <option value="stenciljs"></option>\n    <option value="angular"></option>\n    <option value="vuejs"></option>\n  </datalist>\n</se-form-field>',formField2:'<se-form-field id="input-stacked-form" label="Input" required="true" option="stacked">\n  <input type="text" />\n</se-form-field>\n<se-form-field id="select-form" label="Select" required="true" type="select" option="stacked">\n  <select>\n    <option>Stacked Option 1</option>\n    <option>Stacked Option 2</option>\n    <option>Stacked Option 3</option>\n  </select>\n</se-form-field>\n<se-form-field label="Input with icon" option="stacked">\n  <div class="with-icon">\n    <input type="search" />\n    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>\n  </div>\n</se-form-field>\n<se-form-field label="Autocomplete" option="stacked">\n  <input list="marketSegmentList" />\n  <datalist id="marketSegmentList">\n    <option value="react"></option>\n    <option value="stenciljs"></option>\n    <option value="angular"></option>\n    <option value="vuejs"></option>\n  </datalist>\n</se-form-field>',formField3:'<se-form-field id="input-stacked-form" block label="Input inlined" required="true">\n  <input type="text" />\n</se-form-field>\n<se-form-field id="input-stacked-form" block label="Input stacked" required="true" option="stacked" >\n  <input type="text" />\n</se-form-field>'}},methods:{handleChange(e){console.log(e)}}},s=a,l=i(1001),r=(0,l.Z)(s,n,o,!1,null,"3e99387c",null),c=r.exports}}]);
//# sourceMappingURL=241.01b29da0.js.map