<script>
	import Nav from '#lib/components/Nav.svelte';
	import Lightbox from '#lib/components/Lightbox.svelte';
	import { profile, about, experience, education, skills, projects, creative, hobbies, gallery } from '#lib/content.js';

	const sections = [
		{ id: 'about', label: 'About' },
		{ id: 'experience', label: 'Experience' },
		{ id: 'skills', label: 'Skills' },
		{ id: 'projects', label: 'Projects' },
		{ id: 'creative', label: 'Creative' },
		{ id: 'personal', label: 'Personal' },
		{ id: 'contact', label: 'Contact' }
	];

	let viewing = $state(null);
	const year = new Date().getFullYear();
</script>

<svelte:head>
	<title>{profile.name} · {profile.title}</title>
	<meta name="description" content="{profile.name}: {profile.tagline} Experience, projects, books and art." />
	<meta property="og:title" content="{profile.name} · {profile.title}" />
	<meta property="og:description" content={profile.tagline} />
	<meta property="og:image" content="https://nannakaroliina.github.io/images/hero.jpg" />
</svelte:head>

<Nav {sections} />

<main id="top">
	<section class="hero">
		<img class="hero-img" src="/images/hero.jpg" alt="" fetchpriority="high" />
		<div class="hero-text">
			<h1>{profile.name}</h1>
			<p class="role">{profile.title}</p>
			<p class="tagline">{profile.tagline}<br /><em>{profile.motto}</em></p>
			<ul class="social">
				{#each profile.links as l (l.href)}
					<li>
						<a href={l.href} rel="me noopener" target="_blank" aria-label={l.label}>
							<img src={'/images/icons/' + l.icon} alt="" width="28" height="28" />
						</a>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<section id="about" class="about">
		<div class="wrap about-grid">
			<div>
				<h2>Who I am</h2>
				{#each about as p, i (i)}
					<p>{p}</p>
				{/each}
			</div>
			<img class="portrait" src="/images/Nanna_portrait.png" alt="Portrait of {profile.name}" loading="lazy" />
		</div>
	</section>

	<section id="experience">
		<div class="wrap exp-grid">
			<div>
				<h2>Experience</h2>
				<ol class="timeline">
					{#each experience as job (job.role + job.org)}
						<li>
							<p class="when">{job.dates} · {job.place}</p>
							<h3>{job.role} <span class="org">{job.org}</span></h3>
							{#if job.detail}<p class="detail">{job.detail}</p>{/if}
						</li>
					{/each}
				</ol>
			</div>
			<div>
				<h2>Education</h2>
				<ol class="timeline">
					{#each education as e (e.degree)}
						<li>
							<p class="when">{e.dates}</p>
							<h3>{e.degree}</h3>
							<p class="detail">{e.school}</p>
						</li>
					{/each}
				</ol>
			</div>
		</div>
	</section>

	<section id="skills" class="skills-section">
		<div class="wrap">
			<h2>Skills</h2>
			<div class="cards skills">
				{#each skills as s (s.title)}
					<article class="card">
						<img class="icon" src={'/images/icons/' + s.icon} alt="" width="48" height="48" loading="lazy" />
						<h3>{s.title}</h3>
						<ul>
							{#each s.items as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<section id="projects" class="projects">
		<div class="wrap">
			<h2>Projects</h2>
			<div class="cards">
				{#each projects as p (p.title)}
					<a class="card project" href={p.href} target="_blank" rel="noopener">
						<h3>{p.title} <span aria-hidden="true">↗</span></h3>
						<p>{p.description}</p>
						<ul class="tags">
							{#each p.tags as t (t)}
								<li>{t}</li>
							{/each}
						</ul>
					</a>
				{/each}
			</div>
		</div>
	</section>

	<section id="creative" class="creative">
		<div class="wrap">
			<h2>{creative.name}</h2>
			<p class="lead">{creative.intro}</p>
			<div class="cards">
				{#each creative.strands as s (s.title)}
					<article class="card">
						<h3>{s.title}</h3>
						<p>{s.text}</p>
					</article>
				{/each}
			</div>
			<p class="more">
				<a class="button" href={creative.href} target="_blank" rel="noopener">Visit natravenveil.com ↗</a>
			</p>
		</div>
	</section>

	<section id="personal">
		<div class="wrap">
			<h2>Personal life &amp; hobbies</h2>
			<p class="lead">{hobbies}</p>
			<div class="gallery">
				{#each gallery as g, i (g.src)}
					<button class="thumb" onclick={() => (viewing = i)} aria-label="Open {g.title}">
						<img src={'/images/' + g.src} alt={g.alt} width={g.w} height={g.h} loading="lazy" />
						<span>{g.title}</span>
					</button>
				{/each}
			</div>
		</div>
	</section>

	<section id="contact" class="contact">
		<div class="wrap">
			<h2>Contact</h2>
			<p class="lead">Want to work together or just say hi? Email is the best way to reach me.</p>
			<p class="contact-links">
				<a class="button" href="mailto:{profile.email}">{profile.email}</a>
				{#if profile.phone}
					<a class="button ghost" href="tel:{profile.phone.replaceAll(' ', '')}">{profile.phone}</a>
				{/if}
			</p>
		</div>
	</section>
</main>

<footer>
	<small>© 2018–{year} {profile.name}</small>
</footer>

<Lightbox items={gallery} bind:index={viewing} />

<style>
	.wrap {
		max-width: var(--max);
		margin: 0 auto;
		padding: 0 var(--gutter);
	}
	section {
		padding: clamp(64px, 10vw, 112px) 0;
	}
	h1,
	h2 {
		font-family: var(--display);
		font-weight: 400;
		letter-spacing: 0.02em;
		line-height: 1;
		margin: 0 0 0.5em;
	}
	h2 {
		font-size: clamp(2.5rem, 6vw, 3.75rem);
		text-transform: uppercase;
	}
	h3 {
		margin: 0 0 0.5em;
		font-size: 1.15rem;
	}
	.lead {
		max-width: 62ch;
		color: var(--slate);
		margin: 0 0 2.5rem;
	}

	/* Hero */
	.hero,
	.about,
	.creative,
	.contact {
		--focus: var(--rose);
	}
	.hero {
		position: relative;
		min-height: max(520px, min(100svh, 56.25vw));
		display: flex;
		align-items: center;
		padding: 0;
		background: var(--ink);
		overflow: hidden;
	}
	.hero-img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 60% center;
	}
	.hero::after {
		content: '';
		position: absolute;
		inset: 0;
		background: linear-gradient(90deg, rgba(34, 34, 59, 0.75) 0%, rgba(34, 34, 59, 0.2) 55%, transparent 100%);
	}
	.hero-text {
		position: relative;
		z-index: 1;
		color: #fff;
		width: 100%;
		max-width: var(--max);
		margin: 0 auto;
		padding: 96px var(--gutter) 48px;
	}
	.hero h1 {
		font-size: clamp(3.5rem, 11vw, 8rem);
		text-transform: uppercase;
		margin: 0;
	}
	.role {
		font-family: var(--display);
		font-size: clamp(1.5rem, 3.5vw, 2.25rem);
		letter-spacing: 0.06em;
		text-transform: uppercase;
		margin: 0.25rem 0 0;
		padding-top: 0.5rem;
		border-top: 2px solid var(--rose);
		display: inline-block;
	}
	.tagline {
		margin: 0.75rem 0 1.5rem;
		color: var(--cream);
		max-width: 32ch;
	}
	.social {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		gap: 18px;
	}
	.social a {
		display: block;
		opacity: 0.85;
		transition: opacity 0.2s ease, transform 0.2s ease;
	}
	.social a:hover {
		opacity: 1;
		transform: translateY(-2px);
	}
	.social img {
		width: 28px;
		height: 28px;
		object-fit: contain;
	}

	/* About */
	.about {
		background: var(--slate);
		color: var(--cream);
	}
	.about-grid {
		display: grid;
		grid-template-columns: 1.2fr 1fr;
		gap: clamp(32px, 6vw, 72px);
		align-items: center;
	}
	.about p {
		max-width: 60ch;
	}
	.portrait {
		width: 100%;
		max-width: 460px;
		justify-self: center;
		background: var(--cream);
		border-radius: 50%;
		aspect-ratio: 1;
		object-fit: cover;
	}

	/* Experience */
	.exp-grid {
		display: grid;
		grid-template-columns: 1.4fr 1fr;
		gap: clamp(32px, 6vw, 72px);
	}
	.timeline {
		list-style: none;
		margin: 0;
		padding: 0 0 0 20px;
		border-left: 2px solid var(--rose);
	}
	.timeline li {
		position: relative;
		padding-bottom: 28px;
	}
	.timeline li::before {
		content: '';
		position: absolute;
		left: -27px;
		top: 7px;
		width: 12px;
		height: 12px;
		border-radius: 50%;
		background: var(--paper);
		border: 2px solid var(--mauve);
	}
	.timeline li:first-child::before {
		background: var(--mauve);
	}
	.when {
		margin: 0;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--slate);
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}
	.timeline h3 {
		margin: 2px 0 4px;
	}
	.org {
		display: block;
		font-weight: 400;
		color: var(--slate);
		font-size: 1rem;
	}
	.detail {
		margin: 0;
		color: var(--slate);
		font-size: 0.95rem;
		max-width: 56ch;
	}
	.skills-section {
		background: var(--cream);
	}

	/* Creative */
	.creative {
		background: var(--ink);
		color: var(--cream);
	}
	.creative .lead {
		color: var(--rose);
	}
	.creative .card {
		background: rgba(255, 255, 255, 0.05);
		border-color: rgba(255, 255, 255, 0.08);
	}
	.creative .card p {
		margin: 0;
		color: var(--cream);
		opacity: 0.85;
		font-size: 0.97rem;
	}
	.more {
		margin: 2rem 0 0;
	}

	/* Cards */
	.cards {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
		gap: 20px;
	}
	.card {
		background: #fff;
		border: 1px solid rgba(34, 34, 59, 0.08);
		border-radius: 14px;
		padding: 24px;
	}
	.skills .card {
		text-align: center;
	}
	.icon {
		width: 48px;
		height: 48px;
		margin: 0 auto 12px;
	}
	.card ul {
		list-style: none;
		padding: 0;
		margin: 0;
		color: var(--slate);
		font-size: 0.97rem;
	}
	.card li + li {
		margin-top: 4px;
	}

	.projects {
		background: var(--paper);
	}
	.project {
		text-decoration: none;
		display: flex;
		flex-direction: column;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
	}
	.project:hover,
	.project:focus-visible {
		transform: translateY(-3px);
		box-shadow: 0 12px 28px rgba(34, 34, 59, 0.12);
	}
	.project h3 span {
		color: var(--mauve);
	}
	.project p {
		color: var(--slate);
		margin: 0 0 16px;
		flex: 1;
		font-size: 0.97rem;
	}
	.card .tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.card .tags li {
		margin: 0;
		font-size: 0.78rem;
		padding: 2px 10px;
		border-radius: 99px;
		background: var(--ink);
		color: var(--cream);
	}

	/* Gallery */
	.gallery {
		columns: 3 260px;
		column-gap: 16px;
	}
	.thumb {
		position: relative;
		display: block;
		width: 100%;
		padding: 0;
		margin: 0 0 16px;
		border: 0;
		background: none;
		cursor: zoom-in;
		break-inside: avoid;
		border-radius: 10px;
		overflow: hidden;
	}
	.thumb img {
		width: 100%;
		height: auto;
		transition: transform 0.4s ease;
	}
	.thumb span {
		position: absolute;
		inset: auto 0 0 0;
		padding: 24px 14px 12px;
		color: #fff;
		font-size: 0.88rem;
		text-align: left;
		background: linear-gradient(transparent, rgba(34, 34, 59, 0.85));
		opacity: 0;
		transition: opacity 0.25s ease;
	}
	.thumb:hover img,
	.thumb:focus-visible img {
		transform: scale(1.03);
	}
	.thumb:hover span,
	.thumb:focus-visible span {
		opacity: 1;
	}

	/* Contact */
	.contact {
		background: var(--ink);
		color: var(--cream);
		text-align: center;
	}
	.contact .lead {
		color: var(--rose);
		margin-left: auto;
		margin-right: auto;
	}
	.contact-links {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: center;
	}
	.button {
		display: inline-block;
		padding: 12px 22px;
		border-radius: 99px;
		background: var(--rose);
		color: var(--ink);
		text-decoration: none;
		font-weight: 600;
		overflow-wrap: anywhere;
		transition: background-color 0.2s ease;
	}
	.button:hover {
		background: var(--cream);
	}
	.button.ghost {
		background: transparent;
		color: var(--cream);
		box-shadow: inset 0 0 0 2px var(--mauve);
	}
	.button.ghost:hover {
		box-shadow: inset 0 0 0 2px var(--cream);
	}

	footer {
		background: var(--ink);
		color: var(--mauve);
		text-align: center;
		padding: 20px var(--gutter) 28px;
		border-top: 1px solid rgba(255, 255, 255, 0.06);
	}

	@media (max-width: 760px) {
		.about-grid,
		.exp-grid {
			grid-template-columns: 1fr;
		}
		.portrait {
			max-width: 280px;
			grid-row: 1;
		}
		.hero::after {
			background: linear-gradient(0deg, rgba(34, 34, 59, 0.85) 0%, rgba(34, 34, 59, 0.25) 60%, transparent 100%);
		}
		.hero {
			align-items: flex-end;
			min-height: 88svh;
		}
	}
</style>
