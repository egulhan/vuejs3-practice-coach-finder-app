import {createApp} from 'vue';
import App from './App.vue';
import {createRouter, createWebHashHistory} from "vue-router";
import CoachList from "@/pages/CoachList";
import RequestList from "@/pages/RequestList";
import ContactCoach from "@/pages/ContactCoach";

const routes = [
    {path: '/', name: 'home', component: CoachList},
    {path: '/coaches', name: 'coaches', component: CoachList},
    {path: '/requests', name: 'requests', component: RequestList},
    {path: '/contact/:id', name: 'contact', component: ContactCoach},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');
