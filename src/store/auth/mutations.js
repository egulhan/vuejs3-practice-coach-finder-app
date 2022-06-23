export default {
    setAuthUser(state, payload) {
        state.authUser = payload;
    },
    logout(state) {
        state.authUser = null;
    }
};