<template>
	<div class="home">Tires {{ products }}</div>
</template>

<script lang="ts">
import PageBase from '../utils/page_base.utils';
import { Component } from 'vue-property-decorator';

@Component
export default class Home extends PageBase {
	private products: any[] = [];

	public async created() {
		await super.created();
		this.get_products();
	}

	private async get_products() {
		this.load_form_api(await this.store.api.get_products(), data => {
			this.products = data;
		});
	}
}
</script>
