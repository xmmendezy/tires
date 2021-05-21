import bodyParser from 'body-parser';
import App from 'express';
import config from '../store/config.store';
import { IHeader } from '../store/store.utils';
import axios from 'axios';

const app = App();

app.use(bodyParser.json());

app.get('*', (req, res) => {
	const headers: IHeader = {
		'Content-Type': 'application/json',
	};
	if (req.headers.dolapikey) {
		headers.dolapikey = req.headers.dolapikey as string;
	}
	console.log(`${config.Api}${req.path}`);
	axios
		.get(`${config.Api}${req.path}`, { params: req.query, headers })
		.then(response => {
			res.json(response.data);
		})
		.catch(e => {
			res.json(e);
		});
});

export default app;
