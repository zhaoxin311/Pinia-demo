import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia";

// 创建pinia实例 Vue实例
const pinia = createPinia()
const app = createApp(App)

// 挂载到vue根实例上
app.use(pinia)
app.mount('#app')

