<script>
	let { children } = $props();
</script>

{@render children()}

<style>
	@font-face {
		font-family: 'League Gothic';
		src: url('/fonts/leaguegothic-regular.woff') format('woff');
		font-display: swap;
	}

	:global(:root) {
		--ink: #22223b;
		--slate: #4a4e69;
		--mauve: #9a8c98;
		--rose: #c9ada7;
		--cream: #f2e9e4;
		--paper: #fbf8f6;
		--display: 'League Gothic', 'Arial Narrow', Impact, sans-serif;
		--body: system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		--max: 1120px;
		--gutter: clamp(16px, 4vw, 40px);
		color-scheme: light;
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
	}

	:global(html) {
		scroll-behavior: smooth;
		scroll-padding-top: 72px;
	}

	:global(body) {
		margin: 0;
		background: var(--paper);
		color: var(--ink);
		font-family: var(--body);
		font-size: 1.0625rem;
		line-height: 1.65;
		-webkit-font-smoothing: antialiased;
	}

	:global(img) {
		max-width: 100%;
		display: block;
	}

	:global(a) {
		color: inherit;
	}

	/* Slate ring reads on light backgrounds; dark sections switch --focus to rose. */
	:global(:focus-visible) {
		outline: 3px solid var(--focus, var(--slate));
		outline-offset: 3px;
	}

	@media (prefers-reduced-motion: reduce) {
		:global(html) {
			scroll-behavior: auto;
		}
		:global(*) {
			transition: none !important;
			animation: none !important;
		}
	}
</style>
