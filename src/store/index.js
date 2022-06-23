import {createStore} from "vuex";
import coachModule from './coach';
import requestModule from './request';
import authModule from './auth';
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
    modules: {
        coach: coachModule,
        request: requestModule,
        auth: authModule,
    },
    mutations,
    actions,
    getters,
});

export default store;