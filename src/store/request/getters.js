export default {
    requests: (state) => (id = null) => {
        if (id) {
            return state?.requests[id] ?? [];
        } else {
            const reqs = Object.values(state.requests);
            let newReqs = [];

            reqs.forEach(item => {
                newReqs = newReqs.concat(item)
            });

            return newReqs;
        }
    },
};