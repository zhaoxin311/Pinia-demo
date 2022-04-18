<template>
  <div class=''>
    <button @click="handleAddClick">点击+1</button>
    <button @click="handleCutClick">点击-2</button>
    <button @click="handleClickPatch">修改数据($patch)</button>
    <button @click="handleClickActions">修改数据(actions)</button>
    <button @click="handleClickChangePhone">改变电话号码</button>
    <button @click="getList">控制台显示list</button> 
  </div>
</template>

<script lang="ts" setup>
// 1. 引入mainStore方法
import { mainStore } from "../store/index";
// 2. 实例化 得到状态仓库  
const store = mainStore()
// 3. 定义点击事件的方法
const handleAddClick = () => {
  store.count++;
}
const handleCutClick = () => {
  store.count -= 2;
}


const handleClickPatch = () => {
  // 使用$patch修改多条数据，参数是对象
  // store.$patch({
  //   count: store.count + 10,
  //   helloWorld:store.helloWorld === 'hello world' ? 'hello pinia' : 'hello world'
  // })

  // 使用$patch传递一个函数进行修改数据，适合复杂数据的修改。
  // 这里的state是store仓库里的state，所以可以直接在函数里修改任何状态数据的值。
  store.$patch((state) => {
    state.count++;
    state.helloWorld = state.helloWorld === 'hello world' ? 'hello pinia' : 'hello world'
  })
}

// 直接调用actions中写好修改状态数据的函数
const handleClickActions = () => {
  store.changeState()
}

// 改变电话号码的方法，Getters清除以前的缓存
const handleClickChangePhone = () => {
  store.phone = '13478784362'
}

// store的 相互调用
const getList = () => {
  store.getList();
}
</script>

<style lang='scss' scoped>

</style>