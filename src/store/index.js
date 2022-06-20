import {createStore} from "vuex";
import coachModule from './coach';

const store = createStore({
    modules: {
        coach: coachModule,
    },
    state() {
        return {};
    }
});

export default store;