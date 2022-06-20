import CoachList from "@/pages/CoachList";
import RequestList from "@/pages/RequestList";
import ContactCoach from "@/pages/ContactCoach";
import CoachDetails from "@/pages/CoachDetails";
import NotFound from "@/pages/NotFound";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', name: 'home', component: CoachList},
    {path: '/coaches', name: 'coaches', component: CoachList},
    {path: '/requests', name: 'requests', component: RequestList},
    {path: '/contact/:id', name: 'contact', component: ContactCoach},
    {path: '/coach/:id', name: 'coach-details', component: CoachDetails},
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;