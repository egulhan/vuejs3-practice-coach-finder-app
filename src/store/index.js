import {createStore} from "vuex";
import coachModule from './coach';
import requestModule from './request';

const store = createStore({
    modules: {
        coach: coachModule,
        request: requestModule,
    },
    state() {
        return {};
    }
});

export default store;