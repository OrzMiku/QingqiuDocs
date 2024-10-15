// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator'

const locales = {
	'root': {
		label: '简体中文',
		lang: 'zh-CN',
	},
	'en': {
		label: 'English',
		lang: 'en',
	},
};

const site = "https://qdocs.miku.show";

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [
		starlight({
			plugins: [starlightLinksValidator({
				errorOnFallbackPages: false,
				errorOnInconsistentLocale: true,
			})],
			title: {
				'zh-CN': '青丘',
				'en': 'Qingqiu',
			},
			favicon: '/favicon.ico',
			lastUpdated: true,
			editLink: {
				baseUrl: 'https://github.com/OrzMiku/QingqiuDocs/edit/main/',
			},
			social: {
				github: 'https://github.com/OrzMiku/QingqiuDocs',
			},
			customCss: [
				"./src/assets/custom.css",
			],
			locales,
			sidebar: [
				{
					label: '青丘',
					translations: {
						'en': 'Qingqiu',
					},
					slug: 'qingqiu',
				},
				{
					label: 'LunarFox 整合包',
					translations: {
						'en': 'LunarFox Modpack',
					},
					autogenerate: {
						directory: 'lunarfox',
					}
				}
			],			
		}),
	],
});
