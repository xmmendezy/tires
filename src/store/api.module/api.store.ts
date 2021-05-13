import { createModule, mutation, action } from 'vuex-class-component';
import { LoginDto } from './api.type';
import { HttpBase, ConfigStore, IHeader, get_errors } from '../store.utils';

const VuexModule = createModule({
	namespaced: 'api',
	strict: false,
});

export default class ApiStore extends VuexModule {
	static http: HttpBase;
	static config: ConfigStore;

	static setConfig(http: HttpBase, config: ConfigStore) {
		this.http = http;
		this.config = config;
	}

	private _ualjf_hfbnk: LoginDto = { login: 'admin', password: 'admin' };

	private _access_token: string | undefined = localStorage.getItem('accessToken') || undefined;

	get url() {
		return {
			login: `${ApiStore.config.Api}/login`,
			products: `${ApiStore.config.Api}/products`,
		};
	}

	get headers(): IHeader {
		if (this._access_token) {
			return {
				Authorization: 'DOLAPIKEY: ' + this._access_token,
				'Content-Type': 'application/json',
			};
		} else {
			return {
				'Content-Type': 'application/json',
			};
		}
	}

	get accessToken(): string | undefined {
		return this._access_token;
	}

	get isLoggedApp(): boolean {
		return !!this._access_token;
	}

	@mutation
	public set_auth_data(accessToken?: string) {
		if (accessToken) {
			localStorage.setItem('accessToken', accessToken);
			this._access_token = accessToken;
		}
	}

	@action
	public async logout() {
		localStorage.clear();
		this._access_token = '';
	}

	@action
	public async isLogged(): Promise<boolean> {
		return !!localStorage.getItem('accessToken');
	}

	@action
	public async login(): Promise<string> {
		return await ApiStore.http
			.get(this.url.login, { params: this._ualjf_hfbnk })
			.then(async response => {
				console.log(response);
				const error = get_errors(response);
				if (error) {
					return error;
				}
				if (response.data.success.token) {
					this.set_auth_data(response.data.success.token);
				} else {
					return 'e004';
				}
				return '';
			})
			.catch(e => {
				console.log(e);
				return get_errors(e);
			});
	}

	@action
	public async get_products(): Promise<any[]> {
		return await ApiStore.http
			.get(this.url.products, { headers: this.headers })
			.then(async response => {
				const error = get_errors(response);
				if (error) {
					return error;
				}
				return response.data;
			})
			.catch(e => {
				return get_errors(e);
			});
	}
}
