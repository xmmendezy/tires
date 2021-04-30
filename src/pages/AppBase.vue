<template>
	<div class="app-base">Tires</div>
</template>

<script lang="ts">
import PageBase from '../utils/page_base.utils';
import { Component } from 'vue-property-decorator';

@Component
export default class AppBase extends PageBase {
	private error: boolean = false;

	public async created() {
		await super.created();
	}
}
</script>
