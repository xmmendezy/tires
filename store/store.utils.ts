interface Storage {
	getItem: (key: string) => string | null;
	setItem: (key: string, value: string) => void;
	removeItem: (key: string) => void;
	clear: () => void;
}

interface ConfigStore {
	origin: string;
	proxy: string;
	Api: string;
}

type Method =
	| 'get'
	| 'GET'
	| 'delete'
	| 'DELETE'
	| 'head'
	| 'HEAD'
	| 'options'
	| 'OPTIONS'
	| 'post'
	| 'POST'
	| 'put'
	| 'PUT'
	| 'patch'
	| 'PATCH'
	| 'purge'
	| 'PURGE'
	| 'link'
	| 'LINK'
	| 'unlink'
	| 'UNLINK';

type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';

interface HttpBasicCredentials {
	username: string;
	password: string;
}

interface HttpRequestConfig {
	url?: string;
	method?: Method;
	baseURL?: string;
	headers?: any;
	params?: any;
	paramsSerializer?: (params: any) => string;
	data?: any;
	timeout?: number;
	timeoutErrorMessage?: string;
	withCredentials?: boolean;
	auth?: HttpBasicCredentials;
	responseType?: ResponseType;
	xsrfCookieName?: string;
	xsrfHeaderName?: string;
	onUploadProgress?: (progressEvent: any) => void;
	onDownloadProgress?: (progressEvent: any) => void;
	maxContentLength?: number;
	validateStatus?: (status: number) => boolean;
	maxRedirects?: number;
	socketPath?: string | null;
	httpAgent?: any;
	httpsAgent?: any;
}

interface HttpResponse<T = any> {
	data: T;
	status: number;
	statusText: string;
	headers: any;
	config: HttpRequestConfig;
	request?: any;
}

// eslint-disable-next-line
interface HttpPromise<T = any> extends Promise<HttpResponse<T>> {}

interface HttpInterceptorManager<V> {
	use(onFulfilled?: (value: V) => V | Promise<V>, onRejected?: (error: any) => any): number;
	eject(id: number): void;
}

interface HttpBase {
	(config: HttpRequestConfig): HttpPromise;
	(url: string, config?: HttpRequestConfig): HttpPromise;
	defaults: HttpRequestConfig;
	interceptors: {
		request: HttpInterceptorManager<HttpRequestConfig>;
		response: HttpInterceptorManager<HttpResponse>;
	};
	getUri(config?: HttpRequestConfig): string;
	request<T = any, R = HttpResponse<T>>(config: HttpRequestConfig): Promise<R>;
	get<T = any, R = HttpResponse<T>>(url: string, config?: HttpRequestConfig): Promise<R>;
	delete<T = any, R = HttpResponse<T>>(url: string, config?: HttpRequestConfig): Promise<R>;
	head<T = any, R = HttpResponse<T>>(url: string, config?: HttpRequestConfig): Promise<R>;
	options<T = any, R = HttpResponse<T>>(url: string, config?: HttpRequestConfig): Promise<R>;
	post<T = any, R = HttpResponse<T>>(url: string, data?: any, config?: HttpRequestConfig): Promise<R>;
	put<T = any, R = HttpResponse<T>>(url: string, data?: any, config?: HttpRequestConfig): Promise<R>;
	patch<T = any, R = HttpResponse<T>>(url: string, data?: any, config?: HttpRequestConfig): Promise<R>;
}

interface IHeader {
	dolapikey?: string;
	'Content-Type': string;
}

const get_headers = function (): IHeader {
	if (localStorage.getItem('accessToken') || undefined) {
		return {
			dolapikey: localStorage.getItem('accessToken') || undefined,
			'Content-Type': 'application/json',
		};
	} else {
		return {
			'Content-Type': 'application/json',
		};
	}
};

const get_errors = function (e: any): string {
	if (e.response) {
		if ([200, 201].indexOf(e.response.status) === -1) {
			if (e.response.status === 500) {
				return 'e000';
			}
			if (e.response.status === 401) {
				return 'e001';
			}
			if (e.response.status === 403) {
				return 'e003';
			}
			if (e.response.status === 404) {
				return 'e004';
			}
		}
	}
	if (e.data) {
		if (e.data.error) {
			return e.data.error;
		}
	}
	return '';
};

export { HttpBase, HttpRequestConfig, ConfigStore, Storage, IHeader, get_headers, get_errors };
