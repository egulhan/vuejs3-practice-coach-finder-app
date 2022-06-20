export default {
    addRequest(state, payload) {
        const {id, email, message} = payload;

        let coachRequests;

        if (!state.requests[id]) {
            coachRequests = [];
        } else {
            coachRequests = state.requests[id];
        }

        coachRequests.push({
            email,
            message,
        });

        state.requests[id] = coachRequests;
    }
};