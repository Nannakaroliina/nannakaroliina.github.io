<script>
	let { items, index = $bindable(null) } = $props();
	let dialog;

	const item = $derived(index === null ? null : items[index]);

	$effect(() => {
		if (!dialog) return;
		if (index !== null && !dialog.open) dialog.showModal();
		if (index === null && dialog.open) dialog.close();
	});

	function step(delta) {
		index = (index + delta + items.length) % items.length;
	}

	function onkeydown(e) {
		if (index === null) return;
		if (e.key === 'ArrowRight') step(1);
		if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<svelte:window {onkeydown} />

<dialog
	bind:this={dialog}
	onclose={() => (index = null)}
	onclick={(e) => e.target === dialog && (index = null)}
	aria-label="Image viewer"
>
	{#if item}
		<figure>
			<img src={'/images/' + item.src} alt={item.alt} />
			<figcaption>
				<span>{item.title}</span>
				<span class="count">{index + 1} / {items.length}</span>
			</figcaption>
		</figure>
		<button class="nav prev" aria-label="Previous image" onclick={() => step(-1)}>‹</button>
		<button class="nav next" aria-label="Next image" onclick={() => step(1)}>›</button>
		<button class="close" aria-label="Close" onclick={() => (index = null)}>×</button>
	{/if}
</dialog>

<style>
	dialog {
		border: 0;
		padding: 0;
		background: transparent;
		max-width: 100vw;
		max-height: 100vh;
		width: 100vw;
		height: 100dvh;
		overflow: hidden;
	}
	dialog::backdrop {
		background: rgba(18, 18, 32, 0.92);
	}
	figure {
		margin: 0;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 56px 64px 24px;
	}
	img {
		max-height: calc(100dvh - 120px);
		max-width: 100%;
		object-fit: contain;
		box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
	}
	figcaption {
		display: flex;
		gap: 16px;
		justify-content: space-between;
		width: min(100%, 900px);
		color: var(--cream);
		font-size: 0.9rem;
		padding-top: 12px;
	}
	.count {
		opacity: 0.6;
		white-space: nowrap;
	}
	button {
		position: absolute;
		background: none;
		border: 0;
		color: var(--cream);
		cursor: pointer;
		font-size: 2.5rem;
		line-height: 1;
		padding: 12px;
		opacity: 0.75;
	}
	button:hover {
		opacity: 1;
	}
	.close {
		top: 8px;
		right: 12px;
	}
	.prev {
		left: 8px;
		top: 50%;
		transform: translateY(-50%);
	}
	.next {
		right: 8px;
		top: 50%;
		transform: translateY(-50%);
	}
	@media (max-width: 600px) {
		figure {
			padding: 56px 12px 24px;
		}
		.nav {
			top: auto;
			bottom: 8px;
			transform: none;
		}
	}
</style>
