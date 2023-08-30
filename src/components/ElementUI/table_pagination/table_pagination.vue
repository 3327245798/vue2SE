<template>
  <div class="_table">
    <!-- <div class="_title">共 {{ tableOption.page.total }} 条记录</div> -->
    <el-table
      :data="tableOption.tableData"
      stripe
      border
      :header-cell-style="{ backgroundColor: 'rgb(244, 244, 245)' }"
      style="width: 100%"
    >
      <el-table-column
        v-for="(item, index) in tableOption.tableColumn"
        :key="index"
        :label="item.label"
        :min-width="item.minWidth"
      >
        <!-- 普通列插槽 -->
        <template slot-scope="{ row }">
          <slot :name="item.prop" :row="row">
            <template>
              {{ row[item.prop] }}
            </template>
          </slot>
        </template>
      </el-table-column>
      <el-table-column
        v-if="
          tableOption.operationColumn &&
            Object.keys(tableOption.operationColumn).length
        "
        :fixed="tableOption.operationColumn.fixed"
        label="操作"
        :min-width="tableOption.operationColumn.minWidth"
      >
        <template slot-scope="scope">
          <el-button
            v-for="(btn, index) in tableOption.operationColumn.btns"
            :key="index"
            :type="btn.type"
            :size="btn.size || 'small'"
            @click="
              () => {
                $emit('columnClick', btn.prop, scope.row);
              }
            "
            >{{ btn.title }}</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- :hide-on-single-page="tableOption.page.total >= 0" -->
    <el-pagination
      background
      style="padding:20px 0;text-align:right"
      :current-page="tableOption.page.currentPage"
      :page-sizes="[10, 20, 50]"
      :page-size="tableOption.page.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableOption.page.total"
      @size-change="
        val => {
          $emit('size-change', val);
        }
      "
      @current-change="
        val => {
          $emit('current-change', val);
        }
      "
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    tableOption: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  created() {}
};
</script>
<style lang="scss" scoped>
._table {
  border-top: 5px solid #f6f8fc;
  padding: 16px;
  ._title {
    font-weight: 600;
    margin-bottom: 20px;
  }
}
</style>

