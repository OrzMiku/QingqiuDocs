// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const locales = {
	'zh-cn': {
		label: '简体中文',
		lang: 'zh-CN',
	},
	'en': {
		label: 'English',
		lang: 'en',
	},
};

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				'zh-CN': '青丘',
				'en': 'Qingqiu',
			},
			defaultLocale: 'zh-cn',
			locales,
			social: {
				github: 'https://github.com/OrzMiku/docs',
			},
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
					},
				}
			],
			favicon: './src/assets/avatarHead.png',
		}),
	],
});
