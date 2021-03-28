import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'
import App from './App.vue'

axios.defaults.baseURL = 'http://apis.imooc.com/api/'
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  config.params = { ...config.params, icode: '7D558F450591868F' }
  // 其他请求，添加到 body 中
  // 如果是上传文件，添加到 FormData 中
  if (config.data instanceof FormData) {
    config.data.append('icode', '7D558F450591868F')
  } else {
  // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: '7D558F450591868F' }
  }
  return config
})
axios.interceptors.response.use(config => {
  store.commit('setLoading', false)
  return config
})
const app = createApp(App)
app.use(router).use(store)
app.mount('#app')
