import { ConfigStore } from './store.utils';

const url_origin = ['https://erp.aldisnega.com/api/index.php', 'http://localhost:8000/api/index.php'][
	process.env.NODE_ENV === 'production' ? 0 : 1
];

const config: ConfigStore = {
	origin: `${url_origin}`,
	Api: `${url_origin}`,
};

export default config;
