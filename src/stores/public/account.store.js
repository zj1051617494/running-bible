const state = {
  accountInfo: {
    accountId: "",
    logined: false,
    role: "",
  },
  view: "user"// user or admin 
  
}

const getters = {
  accountInfo(state) {
    return state.accountInfo
  }
}
const mutations = {
  initAccount(state,payload) {
    state.accountInfo.accountId = payload.accountId;
    state.accountInfo.logined = true;
    state.accountInfo.role = payload.role;
  }
}