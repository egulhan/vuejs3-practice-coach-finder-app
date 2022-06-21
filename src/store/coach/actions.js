export default {
    register(context, payload) {
        const id = Date.now();
        payload.id = id;

        context.commit('register', payload);

        return context.dispatch('setAuthUserId', {userId: id}, {root: true});
    }
};