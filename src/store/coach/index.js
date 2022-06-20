import coachMutations from './mutations';
import coachActions from './actions';
import coachGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            coaches: {
                c1: {
                    id: 'c1',
                    name: 'Erman',
                    price: 100,
                    features: [
                        'frontend',
                        'backend',
                        'career',
                    ],
                },
                c2: {
                    id: 'c2',
                    name: 'Recep',
                    price: 100,
                    features: [
                        'frontend',
                        'devops',
                    ],
                },
                c3: {
                    id: 'c3',
                    name: 'Uğur',
                    price: 100,
                    features: [
                        'backend',
                        'devops'
                    ],
                },
                c4: {
                    id: 'c4',
                    name: 'Ali',
                    price: 50,
                    features: [
                        'frontend',
                    ],
                },
                c5: {
                    id: 'c5',
                    name: 'Halil',
                    price: 75,
                    features: [
                        'backend',
                    ],
                },
            },
        };
    },
    mutations: coachMutations,
    actions: coachActions,
    getters: coachGetters,
};