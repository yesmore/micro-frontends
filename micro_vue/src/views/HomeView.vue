<template>
  <div class="home">
    <h1>子程序</h1>
    <p>父程序的数据: </p>
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
  // actions.setGlobalState({ project_id: '项目99'})//改变全局状态
}

onMounted(() => {
  actions.onGlobalStateChange((actionState: any) => { //监听全局状态
    // state.userList = state.userInfo
  }, true);
})
</script>
