import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit({
			// Prerender every page to plain HTML in build/ for GitHub Pages.
			adapter: adapter({ pages: 'build', assets: 'build', fallback: '404.html' })
		})
	]
});
