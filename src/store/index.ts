import Vue from 'vue';
import Vuex from 'vuex';
import { extractVuexModule, createProxy } from 'vuex-class-component';
import { ProxyWatchers } from 'vuex-class-component/dist/interfaces';
import { HttpBase } from './store.utils';

import config from './config.store';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
});

type Store = {
};

const vxm: Store = {
};

export { store, vxm, Store };
export * from './types';
export * from './store.utils';
