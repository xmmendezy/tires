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
	axios.get(`${config.Api}${req.path}`, { params: req.query, headers }).then(response => {
		res.json(response.data);
	});
});

export default app;
