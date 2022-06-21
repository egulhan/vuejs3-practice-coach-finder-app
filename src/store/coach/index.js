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
                    areas: [
                        'frontend',
                        'backend',
                        'career',
                    ],
                },
                c2: {
                    id: 'c2',
                    name: 'Recep',
                    price: 100,
                    areas: [
                        'frontend',
                        'devops',
                    ],
                },
                c3: {
                    id: 'c3',
                    name: 'Uğur',
                    price: 100,
                    areas: [
                        'backend',
                        'devops'
                    ],
                },
                c4: {
                    id: 'c4',
                    name: 'Ali',
                    price: 50,
                    areas: [
                        'frontend',
                    ],
                },
                c5: {
                    id: 'c5',
                    name: 'Ahmet',
                    price: 75,
                    areas: [
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