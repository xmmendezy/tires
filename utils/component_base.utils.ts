import { Vue } from 'vue-property-decorator';
import { vxm, Store } from '@/store';
import VueRouter, { Route, RawLocation } from 'vue-router';
import { BuefyNamespace } from 'buefy';

export default abstract class ComponentBase extends Vue {
	public store: Store = vxm;

	public $buefy!: BuefyNamespace;
	public $router!: VueRouter;
	public $route!: Route;
	public $t!: any;
	public $tc!: any;
	public localeLocation!: any;

	public logout: () => Promise<void> = async () => {
		0;
	};

	public async created() {
		if (process.client) {
			this.store = vxm;
			this.logout = async () => {
				if (this.$route.name !== 'login') {
					await this.changePath({ name: 'login' });
					this.store.api.logout();
				}
			};
			if (this.store.api.isLoggedApp) {
				if (this.$route.name === 'login') {
					await this.changePath({ name: 'index' });
				}
			} else {
				await this.logout();
			}
		}
	}

	public exec_is_render(refs: string, callback: (ref?: Vue | Element | Vue[] | Element[]) => void, c: number = 0) {
		this.sleep(100);
		if (c < 10) {
			if (this.$refs[refs] && this.$refs[refs] !== null) {
				callback(this.$refs[refs]);
			} else {
				this.exec_is_render(refs, callback, c + 1);
			}
		}
	}

	public formatMoney(n: number) {
		if (n) {
			const x = n.toFixed(2).toString().split('.');
			let x1 = x[0];
			const rgx = /(\d+)(\d{3})/;
			while (rgx.test(x1)) {
				x1 = x1.replace(rgx, '$1' + ' ' + '$2');
			}
			return `$${x1}${x.length > 1 ? '.' + x[1] : ''}`;
		} else {
			return '$0';
		}
	}

	public async sleep(n: number) {
		await new Promise(r => setTimeout(r, n));
	}

	public L(key: string): string {
		return this.$t(key) as string;
	}

	public LC(key: string, count: number): string {
		return this.$tc(key, count) as string;
	}

	public async changePath(path: RawLocation) {
		await this.$router.push(this.localeLocation(path));
	}

	public toastError(message: string, duration: number = 4000) {
		this.$buefy.toast.open({
			message,
			type: 'is-danger',
			position: 'is-bottom',
			duration,
		});
	}

	public toastSuccess(message: string, duration: number = 4000) {
		this.$buefy.toast.open({
			message,
			type: 'is-success',
			duration,
		});
	}

	public load_form_api<T>(data: T | string, callback: (data: T) => void, custom_data_error?: { [key: string]: any }) {
		if (typeof data === 'string' && data !== '') {
			const data_error: { [key: string]: any } = {
				e000: () => {},
				e001: () => {
					this.toastError('401');
					this.logout();
				},
				e003: () => {
					this.toastError('403');
					this.logout();
				},
				e004: () => {
					this.toastError('404');
					this.logout();
				},
				...custom_data_error,
			};
			if (data_error[data]) {
				data_error[data]();
			} else {
				this.toastError('');
			}
		} else {
			callback(data as T);
		}
	}
}
