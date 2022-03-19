<template>
  <div id="app">
    <nav>
      <!-- <router-link to="/micro_vue">Micro-vue</router-link>  -->
      <router-link 
        v-for="i in state.menuList" 
        :key="i.name" 
        :to="i.activeRule"
      >{{i.name}}</router-link>
    </nav>
    <div>
      <h1>主程序</h1>
      <p>当前用户: {{state.userList.length}}</p>
    </div>
    
    <div id="micro-vue-viewport"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import apps, { IAppItem } from '@/modules/apps'
import actions from '@/modules/action'

let state = reactive({
  menuList: [] as IAppItem[],
  userList: []
})

onMounted(() => {
  state.menuList = apps
  // console.log(state.menuList)
  actions.onGlobalStateChange((actionState, prev) => {
    state.userList = actionState.userInfo
    // console.log("[micro_parent] state changed:", state);
  }, true);
})

</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
