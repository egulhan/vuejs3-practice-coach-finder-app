export default {
    coaches: (state) => (areas) => {
        const coaches = Object.values(state.coaches);

        if (!areas || areas?.length === 0) {
            return coaches;
        }

        return coaches.filter((coach) => {
            let isFound = false;
            areas.forEach(item => {
                isFound = coach.areas.includes(item);

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