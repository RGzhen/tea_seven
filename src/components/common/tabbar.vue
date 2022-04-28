<template>
  <div class="tabbar">
      <ul>
          <li v-for="(item ,index) in routerLisrt" :key="index" @click="selected(item.path)">
              <img :src="$route.path.includes(item.path) ? item.seleted : item.actived" alt="">
              <span :class="$route.path.includes(item.path) ? 'active' : ''">{{item.title}}</span>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
      return {
          routerLisrt:[
              {
                  title:'首页',
                  path:'/home',
                  actived:'/images/home.png',
                  seleted:'/images/home-select.png'
              },
              {
                  title:'分类',
                  path:'/list',
                  actived:'/images/list.png',
                  seleted:'/images/list-select.png'
              },
              {
                  title:'购物车',
                  path:'/car',
                  actived:'/images/cart.png',
                  seleted:'/images/cart-select.png'
              },
              {
                  title:'我的',
                  path:'/my',
                  actived:'/images/my.png',
                  seleted:'/images/my-select.png'
              },
          ]
      }
  },
  methods:{
      selected(path){
          if(path === this.$route.path) return;
          this.$router.replace(path)
      }
  }
}
</script>

<style scoped>
    .tabbar{
        height: 1.6rem;
        width: 100%;
    }
    .tabbar ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: 100%;
    }
    .tabbar ul li {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
    }
    .tabbar ul li img{
			width: 0.826666rem;
			height: 0.826666rem;
   }
   .tabbar ul li span{
		font-size: 0.426666rem;
   }
   .active{
       color: red;
   }
</style>
