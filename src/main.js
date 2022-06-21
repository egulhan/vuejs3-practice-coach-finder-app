import {createApp} from 'vue';
import App from './App.vue';
import store from './store';
import router from "@/router";
import BaseBadge from "@/components/ui/BaseBadge";
import BaseCard from "@/components/ui/BaseCard";
import BasePage from "@/components/ui/BasePage";

const app = createApp(App);

app.use(router);
app.use(store);
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);
app.component('base-page', BasePage);

app.mount('#app');
