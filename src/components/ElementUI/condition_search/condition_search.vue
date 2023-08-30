<template>
  <div class="_search">
  <!-- 先判断searchOption存不存在，因为有的表格没有，
  然后把表单的size,label-wdith,写上 -->
    <el-form
      v-if="searchOption && Object.keys(searchOption).length"
      :inline="true"
      :size="searchOption.size"
      :label-width="searchOption.labelWidth"
    >
      <el-form-item
        v-for="item in searchOption.searchList"
        :key="item.label"
        :label="item.label"
      >
      <!-- 判断type类型，输入框时 -->
        <template v-if="item.type === 'input'">
          <el-input
            :clearable="item.clearable || true"
            v-model="item.value"
            :placeholder="item.placeholder || '请输入'"
          ></el-input>
        </template>
      <!-- 判断type类型，选择框时 -->
        <template v-else-if="item.type === 'select'">
          <el-select
            v-model="item.value"
            :placeholder="item.placeholder || '请选择'"
            :clearable="item.clearable || true"
          >
            <el-option
              v-for="option in item.optionData || []"
              :key="option.value"
              :label="option.label"
              :value="option.value"
              :disabled="option.disabled"
            />
          </el-select>
        </template>
           <!-- 判断type类型，日期时 -->
        <template v-else-if="item.type === 'date'">
          <el-date-picker
            v-model="item.value"
            type="date"
            :placeholder="item.placeholder || '请选择'"
            :format="item.format || 'yyyy 年 MM 月 dd 日'"
            :value-format="item.valueFormat || 'yyyy-MM-dd'"
          >
          </el-date-picker>
        </template>
        <!-- 
          ...
          后续可根据自己的项目添加其他筛选组件，demo只写了input selece date
         -->
      </el-form-item>
      <!-- 查询重置 -->
      <el-form-item>
        <el-button type="primary" :size="searchOption.size" @click="searchClick"
          >查询</el-button
        >
        <el-button :size="searchOption.size" @click="resetClick"
          >重置</el-button
        >
        <!-- 其它操作按钮，由于有的不需要，所以先判断有没有 -->
        <template
          v-if="searchOption.otherBtns && searchOption.otherBtns.length > 0"
        >
          <el-button
            v-for="(btn, index) in searchOption.otherBtns"
            :key="index"
            :size="btn.size"
            :type="btn.type"
            @click="otherBtnsClick(btn)"
            >{{ btn.title }}</el-button
          >
        </template>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "search",
  props: {
    searchOption: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {
  //遍历检索条件把值返回出去
    searchClick() {
      let Obj = {};
      this.searchOption.searchList.forEach(item => {
        if (item.value !== "") {
          Obj[item.prop] = item.value;
        }
      });
      this.$emit("search", Obj);
    },
    resetClick() {
      this.$emit("reset");
    },
    //其他操作按钮
    otherBtnsClick(btn) {
      this.$emit("otherBtnsClick", btn.prop);
    }
  },
  created() {
    // console.log(this.searchOption);
  }
};
</script>
<style lang="scss" scoped></style>
