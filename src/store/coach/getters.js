export default {
    coaches: (state) => (features) => {
        const coaches = Object.values(state.coaches);

        if (!features || features?.length === 0) {
            return coaches;
        }

        return coaches.filter((coach) => {
            let isFound = false;
            features.forEach(item => {
                isFound = coach.features.includes(item);

                if (isFound) {
                    return false;
                }
            });

            return isFound;
        })
    },
    coach: (state) => (id) => {
        return state.coaches[id] ?? null;
    }
};