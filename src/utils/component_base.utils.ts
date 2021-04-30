import { Vue } from 'vue-property-decorator';
import { vxm, Store } from '@app/store';
import VueRouter, { Route } from 'vue-router';
import { BuefyNamespace } from 'buefy';
import VueI18n, { IVueI18n } from 'vue-i18n';
import { v4 as uuid } from 'uuid';

export default abstract class ComponentBase extends Vue {
	private uuid = uuid();
	private data_listener: Set<string> = new Set();

	public store: Store = vxm;
	public publicPath: string = process.env.BASE_URL;

	public $isMobile: any;
	public $buefy!: BuefyNamespace;
	public $i18n!: VueI18n & IVueI18n;
	public $router!: VueRouter;
	public $route!: Route;

	public logout: () => Promise<void> = async () => {
		0;
	};

	public async created() {
		if ('i18n' in this.$route.query) {
			if (this.$i18n.availableLocales.find((l: string) => l === (this.$route.query.i18n as string))) {
				this.$i18n.locale = this.$route.query.i18n as string;
			}
		}
		this.store = vxm;
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
			return '';
		}
	}

	public async sleep(n: number) {
		await new Promise(r => setTimeout(r, n));
	}

	public L(key: string): string {
		return this.$t(key) as string;
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
					this.toastError(this.L('error.e001'));
					this.logout();
				},
				e003: () => {
					this.toastError(this.L('error.e003'));
					this.logout();
				},
				e004: () => {
					this.toastError(this.L('error.e004'));
					this.logout();
				},
				...custom_data_error,
			};
			if (data_error[data]) {
				data_error[data]();
			} else {
				this.toastError(this.L(data));
			}
		} else {
			callback(data as T);
		}
	}
}
