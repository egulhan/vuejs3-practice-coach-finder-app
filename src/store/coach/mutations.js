export default {
    register(state, payload) {
        const id = Date.now();

        state.coaches[id] = {
            id,
            name: payload.name,
            rate: payload.rate,
            areas: payload.areas,
        };
    },
};