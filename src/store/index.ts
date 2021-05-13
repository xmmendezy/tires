import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import { ProxyWatchers } from 'vuex-class-component/dist/interfaces';
import { HttpBase } from './store.utils';

import config from './config.store';
import axios from 'axios';

import ApiStore from './api.module/api.store';

Vue.use(Vuex);

ApiStore.setConfig(axios as HttpBase, config);

const store = new Vuex.Store({
	modules: {
		...extractVuexModule(ApiStore),
	},
});

type Store = {
	api: ProxyWatchers & ApiStore;
};

const vxm: Store = {
	api: createProxy(store, ApiStore),
};

export { store, vxm, Store };
export * from './types';
export * from './store.utils';
