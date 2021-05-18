import es from './i18n/es.json';

export default {
	head: {
		title: 'Tires',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	css: ['~/assets/styles/index.scss'],

	plugins: ['~plugins/components.utils'],

	components: true,

	buildModules: ['@nuxt/typescript-build'],

	modules: ['nuxt-buefy', '@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/auth-next', 'nuxt-i18n'],

	axios: {},

	pwa: {
		manifest: {
			lang: 'es',
		},
	},

	auth: {},

	i18n: {
		locales: ['es'],
		defaultLocale: 'es',
		vueI18n: {
			fallbackLocale: 'es',
			messages: {
				es,
			}
		}
	},

	serverMiddleware: [
		{ path: "/proxy", handler: "~/server-middleware/rest.ts" },
	],

	build: {},
}
