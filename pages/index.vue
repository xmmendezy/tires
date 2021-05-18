<template>
	<div class="home">
		<b-navbar>
			<template #brand>
				<b-navbar-item>
					<h1 class="title has-text-primary">
						{{ L('title') }}
					</h1>
				</b-navbar-item>
			</template>

			<template #end>
				<b-navbar-item tag="div">
					<b-autocomplete
						rounded
						v-model="search"
						:data="search_products"
						:placeholder="L('helper.search')"
						icon="magnify"
						clearable
						@select="option => (selected = option)"
					>
						<template slot-scope="props">
							<div class="media">
								<div class="media-left">
									<img width="32" :src="props.option.image" />
								</div>
								<div class="media-content">
									{{ props.option.label }}
									<br />
									<small>
										{{ props.option.description }}
									</small>
								</div>
							</div>
						</template>
						<template #empty>{{ L('helper.not_found') }}</template>
					</b-autocomplete>
				</b-navbar-item>
				<b-navbar-item tag="div" @click="logout()">
					<a class="button is-light"> {{ L('helper.logout') }} </a>
				</b-navbar-item>
			</template>
		</b-navbar>
		<div class="content">
			<div v-for="(products, i) of group_products" :key="i" class="tile is-ancestor">
				<div v-for="product of products" :key="product.ref" class="tile is-parent">
					<article class="tile is-child box">
						<img :src="product.image" />
						<p class="title">{{ product.label }}</p>
						<p class="subtitle">{{ product.description }}</p>
						<p class="subtitle has-text-right">{{ formatMoney(product.price) }}</p>
					</article>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import PageBase from '../utils/page_base.utils';
import { Component } from 'vue-property-decorator';
import { Product } from '@/store/types';

@Component
export default class Home extends PageBase {
	private products: Product[] = [];
	private group_products: Product[][] = [];
	private search: string = '';

	public async created() {
		await super.created();
		this.get_products();
	}

	private filter_group_products() {
		this.group_products = [];
		let origin_products = [...this.products];
		if (this.search) {
			const search = new RegExp(this.search, 'i');
			origin_products = origin_products.filter(
				product => search.test(product.label) || search.test(product.description) || search.test(product.price.toString()),
			);
		}
		while (origin_products.length > 0) {
			let dataElement = origin_products.splice(0, 4);
			this.group_products.push(dataElement);
		}
	}

	get search_products(): Product[] {
		if (this.search) {
			const search = new RegExp(this.search, 'i');
			return [...this.products].filter(
				product => search.test(product.label) || search.test(product.description) || search.test(product.price.toString()),
			);
		}
		return [];
	}

	private async get_products() {
		this.load_form_api(await this.store.api.get_products(), data => {
			this.products = data.filter(p => p.status === '1');
			this.filter_group_products();
		});
	}
}
</script>

<style lang="scss">
@import '../assets/styles/initial_variables.scss';

.home {
	.navbar-brand {
		padding-left: 4rem;
	}

	.navbar-end {
		padding-right: 4rem;
	}

	.content {
		padding: 3rem 4rem;

		img {
			height: 12rem;
			display: block;
			margin: auto;
		}

		.subtitle {
			font-size: 1rem;
			padding: 0.5rem 1.5rem;
		}
	}
}
</style>
