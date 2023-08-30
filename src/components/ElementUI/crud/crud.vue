<template>
  <div  class="_crud">
    <div class="_title">{{ title }}</div>
    <div class="_search_content">
      <Search
        :search-option="searchOption"
        @search="
          (Obj) => {
            $emit('search', Obj);
          }
        "
        @reset="handleReset"
        @otherBtnsClick="
          prop => {
            $emit('otherBtnsClick', prop);
          }
        "
      >
      </Search>
    </div>

<div class="_table_content">
      <Table
        :table-option="tableOption"
        @columnClick="
          (prop, row) => {
            $emit('columnClick', prop, row);
          }
        "
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
        <template
          v-for="item in tableOption.tableColumn"
          :slot="item.prop"
          slot-scope="{ row }"
        >
          <slot :name="item.prop" :row="row">
            <template>
              {{ row[item.prop] }}
            </template>
          </slot>
        </template>
      </Table>
    </div>
  </div>
</template>

<script>
//引入
import Search from "../condition_search/condition_search.vue";
import Table from "../table_pagination/table_pagination.vue";
export default {
    //注册
  
  components: { Search,Table },
  props: {
    title: {
      type: String,
      default: () => {
        return "";
      },
    },
    searchOption:{
    type: Object,
      default: () => {
        return {};
      },
    },
     tableOption: {
      type: Object,
      default: () => {
        return {};
      }
    }

  },
  data(){
    return{};
  },
  methods:{
     // 重置
    handleReset() {
      this.searchOption.searchList.forEach(item => {
        const value = item.value;
        if (value instanceof Array) {
          this.$set(item, "value", []);
        } else if (value instanceof Object) {
          this.$set(item, "value", {});
        } else {
          this.$set(item, "value", "");
        }
      });
      this.$emit("reset");
    }

  }
};
</script>
<style lang="scss" scoped>
._crud {
  ._title {
    font-size: 16px;
    font-weight: 600;
    padding: 16px;
  }
  ._search_content {
    padding: 0 16px;
    border-radius: 10px;
  }
}
</style>
