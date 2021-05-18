import { createModule, mutation, action } from 'vuex-class-component';
import { LoginDto, IProduct, Product } from './api.type';
import { HttpBase, ConfigStore, Storage, IHeader, get_errors } from '../store.utils';

const VuexModule = createModule({
	namespaced: 'api',
	strict: false,
});

export default class ApiStore extends VuexModule {
	static http: HttpBase;
	static config: ConfigStore;
	static storage: Storage;

	static setConfig(http: HttpBase, config: ConfigStore) {
		this.http = http;
		this.config = config;
		if (process.client) {
			this.storage = localStorage;
		} else {
			this.storage = {
				getItem: (key: string) => key,
				setItem: (key: string, value: string) => {},
				removeItem: (key: string) => {},
				clear: () => {},
			};
		}
	}

	private _access_token: string | undefined = ApiStore.storage.getItem('accessToken') || undefined;

	get url() {
		return {
			login: `${ApiStore.config.proxy}/login`,
			products: `${ApiStore.config.proxy}/products`,
			documents: `${ApiStore.config.proxy}/documents`,
		};
	}

	get headers(): IHeader {
		if (this._access_token) {
			return {
				dolapikey: this._access_token,
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
			ApiStore.storage.setItem('accessToken', accessToken);
			this._access_token = accessToken;
		}
	}

	@action
	public async logout() {
		ApiStore.storage.clear();
		this._access_token = '';
	}

	@action
	public async isLogged(): Promise<boolean> {
		return !!ApiStore.storage.getItem('accessToken');
	}

	@action
	public async login(data: LoginDto): Promise<string> {
		return await ApiStore.http
			.get(this.url.login, { params: data })
			.then(async response => {
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
				return get_errors(e);
			});
	}

	@action
	public async get_products(): Promise<Product[]> {
		return await ApiStore.http
			.get(this.url.products, { params: { category: 11 }, headers: this.headers })
			.then(async response => {
				const error = get_errors(response);
				if (error) {
					return error;
				}
				const products = response.data.map((p: IProduct) => new Product(p));
				for (const product of products) {
					product.set_image((await this.get_image(product.ref)).name);
				}
				return products;
			})
			.catch(e => {
				return get_errors(e);
			});
	}

	@action
	public async get_image(ref: string): Promise<{ name: string }> {
		return await ApiStore.http
			.get(this.url.documents, { params: { modulepart: 'product', ref }, headers: this.headers })
			.then(async response => {
				const error = get_errors(response);
				if (error) {
					return error;
				}
				return response.data[0] ? response.data[0] : { name: '' };
			})
			.catch(e => {
				return get_errors(e);
			});
	}
}
