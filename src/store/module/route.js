import Cookies from 'js-cookie'

const state = {
  includePath: JSON.parse(Cookies.get('includePath'))
}

const mutations = {
  changeIncludePath (state) {
    state.includePath = JSON.parse(Cookies.get('includePath'))
  }
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}
