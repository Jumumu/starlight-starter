import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
	site: 'https://jumumu.github.io',
	base: '/starlight-starter',
	integrations: [
		starlight({
			title: 'Starlight Starter',
			description: 'Starter project for using Starlight',
			logo: {
				src: './src/assets/houston.webp',
			},
			tableOfContents: { minHeadingLevel: 1, maxHeadingLevel: 3 },
			editLink: {
				baseUrl: 'https://github.com/Jumumu/starlight-starter/edit/main/',
			},
			social: {
				github: 'https://github.com/Jumumu',
				twitch: 'https://www.twitch.tv/Jumumu',
			},
			lastUpdated: true,
			customCss: [
				// Load this additional CSS file using its relative path.
				'./src/styles/headings.css',
			],
		}),
	],
	markdown: {
		rehypePlugins: [rehypeHeadingIds,
			[
				rehypeAutolinkHeadings,
				{
				  // Wrap the heading text in a link.
				  behavior: 'wrap',
				},
			],
		],
	},
});
