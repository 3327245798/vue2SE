"use strict";(self["webpackChunkvue2"]=self["webpackChunkvue2"]||[]).push([[166],{61166:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("se-block",{attrs:{height:"400px"}},[t("se-table",[t("se-table-group-header",[t("se-table-item-header",{attrs:{flex:"1",resizable:"true"}},[e._v("姓名")]),t("se-table-item-header",{attrs:{flex:"1",resizable:"true"}},[e._v("性别")]),t("se-table-item-header",{attrs:{flex:"3","min-width":"100px",resizable:"true"}},[e._v("地址")]),t("se-table-item-header",{attrs:{flex:"1","min-width":"100px",clickable:"true",resizable:"true"}},[e._v("电话")]),t("se-table-item-header",{attrs:{flex:"1","min-width":"100px",resizable:"true"}},[e._v("年龄")]),t("se-table-item-header",{attrs:{flex:"1",resizable:"true"}},[e._v("操作")])],1),e._l(e.setabledata,(function(a){return t("se-table-group",{key:a.id,attrs:{selectable:"true"}},[t("se-table-item",{attrs:{width:"53px"}},[e._v(e._s(a.name))]),t("se-table-item",{attrs:{width:"53px"}},[e._v(e._s(a.sex))]),t("se-table-item",{attrs:{flex:"30%",title:"best practice"}},[e._v(e._s(a.address))]),t("se-table-item",[e._v(e._s(a.phone))]),t("se-table-item",[e._v(e._s(a.age))]),t("se-table-item",{attrs:{width:"54px",option:"dropdown"}},[t("se-dropdown",{attrs:{alignment:"right"}},[t("se-icon",{attrs:{slot:"trigger",option:"button"},slot:"trigger"},[e._v(" other_vertical ")]),t("se-list",{attrs:{option:"dropdown"}},[t("se-list-item",{attrs:{item:"My Site 1"}}),t("se-list-item",{attrs:{item:"My Site 2"}}),t("se-list-item",{attrs:{item:"My Site 3"}})],1)],1)],1)],1)}))],2),t("se-pagination",{attrs:{total:"10",value:"1","per-page":"11","per-page-list":"10;20;50;100;","label-value":"当前页","label-per-page":"每页条数"}})],1)},r=[],i=(a(57658),JSON.parse('{"L":[{"id":1,"name":"张三","sex":"男","address":"上海市张江","phone":"15203838847","age":"18","action":""},{"id":2,"name":"李四","sex":"女","address":"上海市北蔡","phone":"15856218472","age":"19","action":""},{"id":3,"name":"王五","sex":"女","address":"上海市浦东新区","phone":"15167820383","age":"20","action":""},{"id":4,"name":"赵六","sex":"男","address":"上海市徐汇区","phone":"13947820383","age":"28","action":""}]}')),l={data(){return{setabledata:i.L}},methods:{goto(e){this.$router.push(e)},getUserInfo(){this.$axios.get("../../mock/userInfo.json").then((e=>{console.log("返回的用户信息为",e.data)})).catch((e=>{console.error(e)}))}},created(){}},n=l,o=a(1001),d=(0,o.Z)(n,s,r,!1,null,"25a4e37b",null),p=d.exports}}]);
//# sourceMappingURL=166.339d710d.js.map