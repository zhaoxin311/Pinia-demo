<template>
  <div>
    <!-- 普通 -->
    <h2>{{store.helloWorld}}</h2>
    <h2>{{store.count}}</h2>
    <h2>{{store.phoneHidden}}</h2> 
    <hr>
    <!-- 解构 -->
    <h2>{{helloWorld}}</h2>
     <h2>{{count}}</h2>
    <h2>{{phoneHidden}}</h2> 
  </div>
</template>

<script lang="ts" setup>
// 1. 引入mainStore方法
import { mainStore } from "../store/index";
import { toRefs } from "vue";
import { storeToRefs } from "pinia"  //解构
// 2. 实例化 得到状态仓库所有数据
const store = mainStore()

// 解构数据方法：
// const { helloWorld, count, phoneHidden} = mainStore()
// 得到的数据不具有响应式，仅支持一次性展示
// 仅相当于...store，只是做了reactive处理，并没有做toRefs响应式代理。

// 解决办法：
// 1.使用vue的toRefs函数。
// const { helloWorld, count, phoneHidden} = toRefs(store)
// 2.使用pinia中提供的storeToRefs方法解决，推荐使用。
const { helloWorld, count, phoneHidden} = storeToRefs(store)

</script>

<style lang='scss' scoped>

</style>