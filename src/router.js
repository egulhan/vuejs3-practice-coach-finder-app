import CoachList from "@/pages/CoachList";
import RequestList from "@/pages/RequestList";
import ContactCoach from "@/pages/ContactCoach";
import CoachDetails from "@/pages/CoachDetails";
import NotFound from "@/pages/NotFound";
import {createRouter, createWebHistory} from "vue-router";

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
    {path: '/requests', name: 'requests', component: RequestList},
    {path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;