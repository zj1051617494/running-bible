const state = {
  accountInfo: {
    account: "",
    logined: false,
  },
  view: "user"// user or admin 
  
}

const getters = {
  getAccountInfo(state) {
    return state.accountInfo
  }
}
const mutations = {
  initAccount(state,payload) {
    state.accountInfo.account = payload.account;
    state.accountInfo.logined = true;
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
}