import { defineStore } from "pinia";

export const demoStore = defineStore('demo',{
  state:()=>{
    return {
      list:['Lise','Tom','Jack','Mary']
    }
  }
})