import PageChildBase from './page_child_base.utils';

export default abstract class PageBase extends PageChildBase {
	public async created() {
		super.created();
	}

	public reload() {
		const time_reload_mobile = 4000000;
		const time_reload_desktop = 400000;
		setInterval(
			() => {
				if (this.$refs.child_page) {
					(this.$refs.child_page as any).reload();
				}
			},
			this.$isMobile() ? time_reload_mobile : time_reload_desktop,
		);
	}
}
