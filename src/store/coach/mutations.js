export default {
    register(state, payload) {
        const id = payload.id;

        state.coaches[id] = {
            id,
            name: payload.name,
            rate: payload.rate,
            areas: payload.areas,
        };
    },
};