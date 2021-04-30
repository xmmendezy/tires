import ComponentBase from './component_base.utils';

export default abstract class PageChildBase extends ComponentBase {
	public async created() {
		super.created();
	}

	public reload(): void {
		return;
	}
}
