<template>
   <Crud
   :title="title"
    :search-option="searchOption"
    @search="search"
    @reset="reset"
    @otherBtnsClick="otherBtnsClick"

    :table-option="tableOption"
    @columnClick="columnClick"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  <!-- 普通列插槽 -->
    <template slot="status" slot-scope="{ row }">
      <span v-if="row.status && row.status === 1" style="color: #F53F3F;"
        >错误，红的</span
      >
      <span v-else style="color:green">进行中，绿的</span>
    </template>
</Crud>
</template>

<script>

import Crud from './crud/crud.vue'
export default {
    components:{Crud},
    data(){
        return{
            title:"复杂列表",
            searchOption:{
                //表单内组件的尺寸
                size: "small",
                //表单域标签的宽度
                labelWidth: "80px",
                //检索列表
                searchList: [
      /*
        label         标签名，必填
        type          表单类型，必填
        value         绑定值，必填
        prop          字段名，必填
        placeholder   提示语，非必填，默认请输入/请选择
        clearable     是否可清空，非必填，默认清空
        optionData    下拉菜单数据，type为select时填
                      type为date时
        format        显示在输入框中的格式
        valueFormat   返回格式
      */
      { label: "审批人:", type: "input", value: "", prop: "user" },
      {
        label: "活动区域:",
        type: "select",
        value: "",
        prop: "region",
        optionData: [
          { value: "shanghai", label: "区域一" },
          { value: "beijing", label: "区域二", disabled: true }
        ]
      },
      {
        label: "日期:",
        type: "date",
        value: "",
        prop: "date",
        placeholder: "选择日期",
        format: "yyyy 年 MM 月 dd 日",
        valueFormat: "yyyy-MM-dd"
      }
    ],
 // 其它操作按钮，默认已有查询重置，不必填，可不要
    otherBtns: [
      { title: "导出", prop: "export", type: "danger" },
      { title: "下载", prop: "downLoad", type: "success" }
    ]

            },
            // 列表数据：表格列tableColumn，表格数据tableData，表格操作按钮operationColumn，分页数据operationColumn
      tableOption: {
        // 表格列，必填
        tableColumn: [
          {
            prop: "name",
            label: "姓名"
          },
          {
            prop: "status",
            label: "状态"
          },
          {
            prop: "address",
            label: "描述",
            minWidth: "150"
          },
          {
            prop: "date",
            label: "日期",
            minWidth: "200"
          }
        ],
        // 表格数据，必填
        tableData: [
          {
            id: 1,
            name: "张三",
            status: 1,
            address: "我是描述",
            date: "2022-01-01"
          },
          {
            id: 2,
            name: "李四",
            status: 2,
            address: "我是描述2",
            date: "2022-01-02"
          }
        ],
        // 表格操作按钮，非必填
        operationColumn: {
          // 是否fixed
          fixed: "right",
          // 最小宽度
          minWidth: "250",
          btns: [
            { title: "编辑", prop: "edit", type: "primary", size: "small" },
            { title: "删除", prop: "delete", type: "danger", size: "small" },
            { title: "查看", prop: "dtl", type: "info", size: "small" }
          ]
        },
        //分页数据
        page: {
          currentPage: 1,
          pageSize: 10,
          total: 20
        }
      }


        }
    },
    methods:{
        //条件检索
        search(Obj){
            console.log(Obj)
        },
        //重置
    reset() {
      console.log("重置");
    },
     otherBtnsClick(prop) {
      switch (prop) {
        case "export":
          console.log("我是导出");
          break;
        case "downLoad":
          console.log("我是下载");
          break;
        default:
          break;
      }
    },
    //表格列操作
    columnClick(prop,row){
        switch(prop){
            case "edit":
                console.log("编辑",row);
                break;
            case "delete":
                this.$confirm("此操作将删除该数据，是否确认删除？","删除",{
                    confirmButtonText:"确定",
                    cancelButtonText:"取消",
                    type:"warning"
                }).then(()=>{
                    this.$message({type:"success",message:"删除成功！"})
                }).catch(()=>{
                    this.$message({type:"info",message:"已经取消删除！"})
                });
                break;
            case "dtl":
                console.log("查看")
                break;
            default:
                break;

        }
    },
    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    }

    }

}
</script>
<style lang="sass" scoped></style>