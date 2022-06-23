export default {
    authUser(state) {
        return state.authUser;
    },
    hasLoggedIn(state) {
        return !!state.authUser;
    }
}