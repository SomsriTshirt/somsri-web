// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	modules: [
		"@nuxt/content",
		"@nuxt/ui",
		"@nuxt/image",
		"@nuxt/fonts",
		"@nuxt/eslint",
		"nuxt-swiper",
		"@nuxtjs/seo",
	],
	app: {
		head: {
			htmlAttrs: {
				lang: "th",
			},
			link: [
				{
					rel: "apple-touch-icon",
					sizes: "180x180",
					href: "/favicon/apple-touch-icon.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "32x32",
					href: "/favicon/favicon-32x32.png",
				},
				{
					rel: "icon",
					type: "image/png",
					sizes: "16x16",
					href: "/favicon/favicon-16x16.png",
				},
				{
					rel: "manifest",
					href: "/favicon/site.webmanifest",
				},
				{
					rel: "mask-icon",
					href: "/favicon/safari-pinned-tab.svg",
					color: "#a52241",
				},
			],
			meta: [
				{
					name: "msapplication-TileColor",
					content: "#a52241",
				},
				{
					name: "theme-color",
					content: "#ffffff",
				},
			],
		},
	},
	seo: {},
	site: {
		url: "https://somsritshirt.com",
		name: "สมศรีมีเสื้อ",
	},
	css: ["~/assets/css/main.css"],
	devtools: { enabled: true },
	future: {
		compatibilityVersion: 4,
	},
	watch: ["content/**"],
	fonts: {
		assets: { prefix: "/fonts/" },
		families: [
			{
				name: "DB Helvethaica X",
				provider: "local",
			},
		],
	},
	content: {
		preview: {
			api: "https://api.nuxt.studio",
			// force module initialization on dev env
			dev: true,
		},
	},
	colorMode: {
		preference: "light",
		fallback: "light",
		storageKey: "somsri-web-color-mode",
	},
	hooks: {
		"components:extend": (components) => {
			const globals = components.filter((c) => ["UButton", "UIcon"].includes(c.pascalName))

			globals.forEach((c) => (c.global = true))
		},
	},
})
