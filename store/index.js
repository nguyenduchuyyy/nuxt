import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
    },
    mutations: {
      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        stateate.token = null
      },
    },
    actions: {
      authenticationUser(context, credentials) {
        let loginApi =
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc'
        if (!credentials.checkLogin) {
          loginApi =
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA0qXrqxpNc5FuQ_PE9D2bE4nlmPTuFAnc'
        }
        return this.$axios
          .$post(loginApi, {
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          })
          .then((result) => {
            if (!credentials.checkLogin) {
              alert('Register Success !')
            } else {
              alert('Login Success !')
              // console.log(result)
              context.commit('setToken', result.idToken)
              // context.commit('setToken', result.idToken)
              this.$router.push('my_page')
            }
            // window.location.href = '/'
          })
          .catch((e) => {
            alert(e)
          })
      },
      setLogoutTinme(context, duration) {
        setTimeout(() => {
          contextontext.commit('clearToken')
        }, duration)
      },
    },
    getters: {
      isAuth(state) {
        return state.token != null
      },
    },
  })
}
export default createStore
