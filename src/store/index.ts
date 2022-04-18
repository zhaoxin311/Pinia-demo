
// defineStore方法的第一个参数相当于容器的名字(名字必须唯一不可重复。)
// state属性：存储全局的状态数据
// getters属性：监视、计算状态变化的，有缓存功能
// actions属性：修改state全局状态数据


import { defineStore } from "pinia";
import { demoStore } from "./demo";

// 定义并导出容器
// 参数1：容器的ID，必须唯一
// 参数2：一下选项对象，state、getters、actions
// Pinia中Actions(同步和异步请求)，Vuex中Mutations(同步)、Actions(异步)
export const mainStore = defineStore('main',{
  // 类似Vue2组件中的data，用于存储全局状态数据，有两点注意：
  // 1. 必须是函数，目的是为了在服务器渲染的时候避免交叉请求导致的数据状态污染
  // 2. 必须是箭头函数，为了更好的 TS 类型推导
  state:()=>{
    return {
      helloWorld:'hello world',
      count:0,
      phone:'15166880987'
    }
  },
  getters:{
    // 编写phoneHidden方法使用正则表达式隐藏手机中间四位
    // phoneHidden(state){
    //   console.log('phoneHidden被调用了！');
    //   return state.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    // }

    // tips ：不仅可以传递state参数用来改变状态数据，还可以直接使用关键字this来改变数据。
    // 不传state，TS无法推断出返回的数据类型，所以要表明返回类型
    phoneHidden() : String{
      console.log('PhoneHidden被调用了');
      return this.phone.toString().replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2')
    }
  },
  // 当修改的过程很复杂时，可以在actions中定义好，在组件中直接调用函数来修改状态数据
  // 注意：再用 actions 的时候，不能使用箭头函数，因为箭头函数绑定的是外部的this。
  actions:{
    changeState(){
      this.count++
      this.helloWorld='在action中写好的函数，组件中直接调用。'
    },
    getList(){
      console.log(demoStore().list);
      
    }
  }
})

// 注意没有 mutations

