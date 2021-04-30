import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
	{
		path: '',
		name: 'AppBase',
		component: () => import(/* webpackChunkName: "app-base" */ '@app/pages/AppBase.vue'),
	},
];

export const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});
