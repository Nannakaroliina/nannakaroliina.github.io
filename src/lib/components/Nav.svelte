<script>
	let { sections } = $props();
	let open = $state(false);
	let scrolled = $state(false);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 40)} />

<header class:scrolled class:open>
	<nav aria-label="Main">
		<a class="brand" href="#top" onclick={() => (open = false)}>
			<img src="/images/logo-white.png" alt="Nanna Setämaa, home" width="32" height="32" />
		</a>
		<button
			class="toggle"
			aria-expanded={open}
			aria-controls="nav-links"
			aria-label="Toggle navigation"
			onclick={() => (open = !open)}
		>
			<span></span><span></span><span></span>
		</button>
		<ul id="nav-links">
			{#each sections as s (s.id)}
				<li><a href={'#' + s.id} onclick={() => (open = false)}>{s.label}</a></li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	header {
		position: fixed;
		inset: 0 0 auto 0;
		z-index: 20;
		transition: background-color 0.25s ease, box-shadow 0.25s ease;
	}
	header.scrolled,
	header.open {
		background: rgba(34, 34, 59, 0.94);
		backdrop-filter: blur(8px);
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
	}
	nav {
		max-width: var(--max);
		margin: 0 auto;
		padding: 12px var(--gutter);
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.brand img {
		width: 32px;
		height: 32px;
	}
	ul {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		gap: 28px;
	}
	ul a {
		color: var(--cream);
		text-decoration: none;
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		padding: 6px 0;
		border-bottom: 2px solid transparent;
		transition: border-color 0.2s ease, color 0.2s ease;
	}
	ul a:hover {
		color: #fff;
		border-color: var(--rose);
	}
	.toggle {
		display: none;
		background: none;
		border: 0;
		padding: 10px 6px;
		cursor: pointer;
	}
	.toggle span {
		display: block;
		width: 24px;
		height: 2px;
		margin: 5px 0;
		background: var(--cream);
		transition: transform 0.25s ease, opacity 0.25s ease;
	}
	.open .toggle span:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.open .toggle span:nth-child(2) {
		opacity: 0;
	}
	.open .toggle span:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	@media (max-width: 860px) {
		.toggle {
			display: block;
		}
		ul {
			display: none;
			flex-basis: 100%;
			flex-direction: column;
			gap: 0;
			padding: 8px 0 12px;
		}
		.open ul {
			display: flex;
		}
		ul a {
			display: block;
			padding: 12px 0;
			font-size: 1.05rem;
		}
	}
</style>
