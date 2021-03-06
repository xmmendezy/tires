<template>
	<div class="login">
		<div class="body has-text-centered">
			<div class="box is-inline-block">
				<article class="media">
					<div class="media-content has-text-centered">
						<p class="title">{{ L('login.a') }}</p>
						<section class="form has-text-centered">
							<b-field>
								<c-input
									ref="input"
									v-model="login_form.login"
									@keyup.enter.native="login()"
									:placeholder="L('login.b')"
								></c-input>
							</b-field>
							<b-field>
								<c-input
									v-model="login_form.password"
									@keyup.enter.native="login()"
									:placeholder="L('login.c')"
									password
								>
								</c-input>
							</b-field>
							<b-field>
								<b-button @click="login()" type="is-primary">{{ L('login.e') }}</b-button>
							</b-field>
						</section>
					</div>
				</article>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import PageChildBase from '../utils/page_child_base.utils';
import { Component } from 'nuxt-property-decorator';
import { LoginDto } from '../store';

@Component
export default class Login extends PageChildBase {
	private isModalForgotPassword: boolean = false;
	private email_forgot_password: string = '';

	private login_form: LoginDto = {
		login: '',
		password: '',
	};

	public async created() {
		await super.created();
	}

	private async mounted() {
		const timer = setInterval(() => {
			if (this.$refs.input) {
				clearInterval(timer);
				(this.$refs.input as any).focus();
			}
		}, 10);
	}

	private async login() {
		this.load_form_api(
			await this.store.api.login(this.login_form),
			() => {
				this.toastSuccess(this.L('helper.welcome'));
				this.changePath({ name: 'index' });
			},
			{
				e000: () => {
					this.toastError(this.L('login.error.e000'));
				},
			},
		);
	}
}
</script>

<style lang="scss">
@import '../assets/styles/initial_variables.scss';

.login {
	.body {
		padding-top: 4.5rem;
		height: 100vh;
		position: relative;

		.box {
			width: 40%;
			border-radius: 24px;
			margin: 0;
			position: absolute;
			top: 50%;
			left: 50%;
			-ms-transform: translate(-50%, -50%);
			transform: translate(-50%, -50%);
			transition: width 150ms ease-out;

			@include until-widescreen {
				width: 60%;
			}

			@include mobile {
				width: 100%;
				height: 100%;
				border-radius: 0;
			}

			.media {
				padding: 2rem 0;

				@include mobile {
					padding: 3rem 0;
					height: 100%;

					.media-content {
						height: 100%;
					}
				}

				.logo {
					width: 12rem;
					margin: auto;
					margin-bottom: 3rem;
				}

				.title {
					color: $dark;
					font-size: 32px;
					font-weight: bold !important;
				}

				.form {
					margin: auto;
					width: 70%;

					@include mobile {
						width: 90%;
					}

					.button.is-text {
						text-decoration-color: $primary;
						text-underline-offset: 50%;
					}

					.button.is-primary {
						padding: 1.5rem 1rem;
						margin: 1rem 0;
						width: 50%;
					}
				}

				.is-divider {
					margin-left: auto;
					margin-right: auto;
					width: 90%;
				}

				.button.is-primary {
					padding: 1.5rem 1rem;
					margin: 1rem 0;
					width: 35%;
				}

				.columns {
					margin: 0;

					.column-terms {
						font-size: 12px;
						margin-left: 3rem;

						@include mobile {
							margin: auto;
							width: 50%;
						}
					}
				}
			}
		}
	}
}
</style>
