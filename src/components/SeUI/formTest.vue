<template>
 <div class="hello">
     <se-block divider>
      <se-block-header> SE中的表单域 </se-block-header>
      <se-block-content>
        <se-form-field label="Input" required="true">
          <input type="text" />
        </se-form-field>
        <se-form-field label="Select" required="true" type="select">
          <select>
            <option>实习</option>
            <option>全职</option>
            <option>兼职</option>
          </select>
        </se-form-field>
         <se-divider></se-divider>
        <se-form-field label="Select the an album" required="true" option="stacked">
          <se-radio-group value="second">
            <se-radio value="first" label="羽毛球"></se-radio>
            <se-radio value="second" label="篮球"></se-radio>
            <se-radio value="third" label="足球"></se-radio>
          </se-radio-group>
        </se-form-field>
        <se-divider></se-divider>
        <se-form-field label="爱好" type="checkbox" required="true" option="stacked">
          <se-checkbox value="checkbox-value">唱歌</se-checkbox>
          <se-checkbox value="checkbox-value">画画</se-checkbox>
          <se-checkbox value="checkbox-value">跳舞</se-checkbox>
          <se-checkbox value="checkbox-value">书法</se-checkbox>
        </se-form-field>
         <se-divider></se-divider>
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
         <se-form-field
  label="This is my custom Checkbox.  It is unique."
  type="checkbox"
  required="true"
>
  <se-checkbox value="checkbox-value"></se-checkbox>
</se-form-field>
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
<se-form-field label="Input with icon">
  <div class="with-icon">
    <input type="search" />
    <se-icon size="small" style="margin-left:4px">action_search_stroke</se-icon>
  </div>
</se-form-field>
<se-form-field label="Autocomplete">
  <input list="marketSegmentList" />
  <datalist id="marketSegmentList">
    <option value="react"></option>
    <option value="stenciljs"></option>
    <option value="angular"></option>
    <option value="vuejs"></option>
  </datalist>
</se-form-field>
        </se-block-content>
    </se-block>
 </div>
</template>

<script>
export default {

}
</script>

<style>

</style>