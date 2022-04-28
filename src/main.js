import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import HTTP from '@/common/api/request.js'
Vue.prototype.$http = HTTP;

Vue.config.productionTip = false
//iconfont
import './assets/css/iconfont.css'
//移动端适配
import './assets/js/flexible';
//头部滑块插件
import LyTab from 'ly-tab'
Vue.use(LyTab)
//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import swiper style
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
//首页消息公告滚动
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
