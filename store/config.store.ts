import { ConfigStore } from './store.utils';

const url_origin = ['https://erp.aldisnega.com', 'http://localhost:8000'][
	process.env.NODE_ENV === 'production' ? 0 : 1
];

const config: ConfigStore = {
	proxy: '/proxy',
	origin: `${url_origin}`,
	Api: `${url_origin}/api/index.php`,
};

export default config;
