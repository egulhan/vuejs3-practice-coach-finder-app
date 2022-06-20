export default {
    requests(state) {
        const reqs = Object.values(state.requests);
        let newReqs = [];

        reqs.forEach(item => {
            newReqs = newReqs.concat(item)
        });

        return newReqs;
    },
};