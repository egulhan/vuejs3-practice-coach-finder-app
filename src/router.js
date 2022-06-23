import CoachList from "@/pages/CoachList";
import RequestList from "@/pages/RequestList";
import ContactCoach from "@/pages/ContactCoach";
import CoachDetails from "@/pages/CoachDetails";
import NotFound from "@/pages/NotFound";
import {createRouter, createWebHistory} from "vue-router";
import CoachRegistration from "@/pages/CoachRegistration";
import TheAuth from "@/pages/TheAuth";
import store from "@/store";

const routes = [
    {path: '/', name: 'home', redirect: '/coaches'},
    {path: '/coaches', name: 'coaches', component: CoachList},
    {
        path: '/coaches/:id',
        name: 'coach-details',
        component: CoachDetails,
        children: [
            {path: 'contact', name: 'contact', component: ContactCoach},
        ]
    },
    {path: '/requests', name: 'requests', component: RequestList, meta: {requiresLogin: true}},
    {path: '/register', name: 'register', component: CoachRegistration},
    {path: '/auth', name: 'auth', component: TheAuth},
    {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const isAuthenticated = store.getters['hasLoggedIn'];

    if (!isAuthenticated && !!to.meta.requiresLogin) {
        return next({name: 'auth'});
    } else if (isAuthenticated && to.name === 'auth') {
        return router.replace({name: 'coaches'});
    }

    next();
});

export default router;