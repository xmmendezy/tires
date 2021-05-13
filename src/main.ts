import Vue from 'vue';
import Main from './Main.vue';
import './registerServiceWorker';
import { router } from './router';
import { store } from './store';
import Buefy from 'buefy';
import './styles/index.scss';

Vue.use(Buefy, { defaultIconPack: 'fas' });

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: h => h(Main),
}).$mount('#app');
