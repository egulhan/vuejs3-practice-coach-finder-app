export default {
    coaches: (state) => (features) => {
        const coaches = Object.values(state.coaches);

        if (!features) {
            return coaches;
        }

        const sortedFeatures = features.sort().join(',').toLowerCase();

        return coaches.filter((coach) => {
            const coachFeatures = coach.features.sort().join(',').toLowerCase();
            return sortedFeatures === coachFeatures;
        })
    },
    coach: (state) => (id) => {
        return state.coaches[id] ?? null;
    }
};