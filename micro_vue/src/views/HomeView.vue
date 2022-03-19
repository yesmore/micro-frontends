<template>
  <div class="home">
    <h1>子程序 -- vue</h1>
    <p>父程序的数据: {{state.userList.length}}</p>
    <button @click="btnClick">改变全局数据</button>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from 'vue';
import actions from '@/action';

let state = reactive({
  userList: []
})

const btnClick = () => {
  const temp = JSON.parse(JSON.stringify(state.userList))
  temp.push({
    userName: '王五',
    userId: new Date().getTime(),
  })
  actions.setGlobalState({
    userInfo: temp
  })// 改变全局状态
}

onMounted(() => {
  actions.onGlobalStateChange((actionState: any) => { //监听全局状态
    state.userList = actionState.userInfo
  }, true);
})
</script>
