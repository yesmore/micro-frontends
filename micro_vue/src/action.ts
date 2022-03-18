function emptyAction() {
  // 提示当前使用的是空 Action
  console.warn("Current execute action is empty!");
}

class Actions {
  actions = {
    onGlobalStateChange: emptyAction,
    setGlobalState: emptyAction,
  };

  // 设置 actions
  setActions(actions: any) {
    this.actions = actions;
  }

  // 映射
  onGlobalStateChange(cb: unknown, change: boolean) {
    return this.actions.onGlobalStateChange(cb, change);
  }

  // 映射
  setGlobalState(...args: []) {
    return this.actions.setGlobalState.apply(null, args);
  }
}

const actions = new Actions();

export default actions;
