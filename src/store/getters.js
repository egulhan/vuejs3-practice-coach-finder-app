export default {
    authUserId(state) {
        return state.authUserId;
    },
    isAuthenticated(state) {
        return state.authUserId !== null;
    }
};