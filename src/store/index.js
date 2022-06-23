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
    state() {
        return {
            // determine if a user is authenticated or not
            authUserId: null,
        };
    },
    mutations,
    actions,
    getters,
});

export default store;