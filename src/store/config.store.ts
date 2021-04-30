import { ConfigStore } from './store.utils';

// prettier-ignore
const url_origin = [
	'http://127.0.0.1:9000',
	'http://127.0.0.1:9000',
][
	process.env.NODE_ENV === 'production'
		? 0
		: 1
];

const config: ConfigStore = {
	origin: `${url_origin}`,
	Api: `${url_origin}/api`,
};

export default config;
