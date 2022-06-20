import requestMutations from './mutations';
import requestActions from './actions';
import requestGetters from './getters';

export default {
    namespaced: true,
    state() {
        return {
            requests: {},
        }
    },
    mutations: requestMutations,
    actions: requestActions,
    getters: requestGetters,
};