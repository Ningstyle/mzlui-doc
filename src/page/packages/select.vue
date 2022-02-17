<template>
  <div>
    <span style="width:300px;margin-right:0;">
      <m-select 
        v-model="selVal" 
        placeholder="请选择" 
        :options="selOptions" 
        @change="selchange"
      >
      </m-select>
    </span>
  </div>
</template>

<script setup>
import {reactive, ref} from 'vue'
const selVal = ref('')
const state = reactive({
  selOptions:[
    {
      label:'中国',
      value:'zhongguo'
    },
    {
      label:'俄罗斯',
      value:'eluosi',
			disabled:true
    },
    {
      label:'美国',
      value:'meiguo'
    },
    {
      label:'澳大利亚',
      value:'aodaliya',
			disabled:true
    },
    {
      label:'巴基斯坦',
      value:'bajisitan'
    }
  ],
})
const selchange = (item,index) =>{
	console.log(selVal.value);
	// console.log(item,index);
}
const {selOptions} = state
</script>

<style lang="scss" scoped>

</style>