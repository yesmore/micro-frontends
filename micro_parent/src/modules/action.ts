import { initGlobalState } from "qiankun";

const initialState = {
  userInfo: [
    {
      userName: "张三",
      userId: 1,
    },
    {
      userName: "李四",
      userId: 2,
    },
  ],
};

const actions = initGlobalState(initialState);
// 监听变化
actions.onGlobalStateChange((state, prev) => {
  console.log("[micro_parent] state changed(prev):", prev);
  console.log("[micro_parent] state changed(state):", state);
});

export default actions;
