// All site text lives here, so updating the portfolio never means touching layout code.

export const profile = {
	name: 'Nanna Setämaa',
	title: 'Senior Software Engineer',
	tagline: 'Full-stack software engineer, author, illustrator and independent publisher.',
	motto: 'I look for the one piece that doesn’t belong.',
	location: 'Finland',
	email: 'nanna.karoliina@outlook.com',
	links: [
		{ label: 'GitHub', href: 'https://github.com/Nannakaroliina', icon: 'GitHub-Mark-Light-64px.png' },
		{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/nannakaroliina/', icon: 'In-White-66px-TM.png' },
		{ label: 'Instagram', href: 'https://www.instagram.com/nannakaroliina/', icon: 'IG_Glyphl.png' }
	]
};

export const about = [
	'I look for the one piece in an orderly system that doesn’t belong. That’s the job in software engineering, and it’s the job in crime fiction. I do both.',
	'By profession I’m a full-stack software engineer, strongest on the back end, currently a Senior Software Engineer at F-Secure. I build cloud applications on AWS: Python and Java with Spring, containerised with Docker, running on Kubernetes, with PostgreSQL behind them and CI/CD I’d rather automate than repeat. I’ve built ML pipelines with Kubernetes and Kubeflow, and I work in Angular, TypeScript and Svelte when the front end needs me.',
	'Microservices, agile, and a team where people can say “I don’t know” out loud: that last part matters more than the stack. I also hold an MBA in Leadership and Management from Valar Institute.'
];

export const experience = [
	{
		role: 'Senior Software Engineer',
		org: 'F-Secure',
		dates: 'May 2026 – present',
		place: 'Oulu',
		detail: 'Development work on core services, and innovating new solutions that make everyday work easier.'
	},
	{
		role: 'Writer, artist & publisher',
		org: 'Nat Ravenveil (sole trader)',
		dates: 'Nov 2024 – present',
		place: 'Remote',
		detail: 'Novels and picture books, publishing for my own titles and other authors, illustration on commission and AI music.'
	},
	{
		role: 'IT Developer',
		org: 'Nordea',
		dates: 'Feb 2024 – May 2026',
		place: 'Oulu',
		detail: 'Authentication and signing services with Spring and TypeScript.'
	},
	{
		role: 'Cloud Developer',
		org: 'WithSecure',
		dates: 'May 2022 – Sep 2023',
		place: 'Oulu',
		detail: 'Lead developer of email and SMS messaging services, run DevOps-style: containerisation, customer support and the service carve-out after the demerger.'
	},
	{
		role: 'Research Assistant',
		org: 'University of Oulu, iEdge',
		dates: 'Aug 2021 – May 2022',
		place: 'Oulu',
		detail: 'MLOps for the EU FRACTAL research project.'
	},
	{
		role: 'Software Engineer',
		org: 'Hyland',
		dates: 'Jan 2020 – Jul 2021',
		place: 'London',
		detail: 'Full-stack development for cloud-based content management software.'
	}
];

export const education = [
	{ degree: 'MBA, Leadership and Management', school: 'Valar Institute', dates: '2025 – 2026' },
	{ degree: 'Bachelor of Business Information Technology', school: 'Haaga-Helia University of Applied Sciences', dates: '2018 – 2020' },
	{ degree: 'Exchange semester, Computer Science', school: 'Seoul National University of Science and Technology', dates: '2019' },
	{ degree: 'Vocational degree, Audiovisual Communications', school: 'Luovi Vocational College', dates: '2012 – 2015' }
];

export const skills = [
	{
		title: 'Back-end',
		icon: 'code.png',
		items: ['Java & Spring', 'Python', 'RESTful services', 'Microservices', 'PostgreSQL & SQL']
	},
	{
		title: 'Cloud & DevOps',
		icon: 'code.png',
		items: ['AWS', 'Docker', 'Kubernetes', 'Kubeflow ML pipelines', 'CI/CD']
	},
	{
		title: 'Front-end',
		icon: 'front.png',
		items: ['TypeScript', 'Angular', 'Svelte', 'HTML & CSS']
	},
	{
		title: 'Creative',
		icon: 'design.png',
		items: ['Creative writing', 'Pencil & digital illustration', 'Book design & publishing', 'Photoshop & photography', 'AI music']
	},
	{
		title: 'Languages',
		icon: 'language.png',
		items: ['Finnish: native', 'English: working language', 'Italian: un po’']
	}
];

export const projects = [
	{
		title: 'Grimlure',
		description: 'An AI narrator for collaborative fiction, built in Svelte and TypeScript with Cloudflare in front.',
		href: 'https://grimlure.com',
		tags: ['Svelte', 'TypeScript', 'Cloudflare', 'AI']
	},
	{
		title: 'AWS Quest',
		description: 'An 8-bit retro game that teaches 28 AWS services, complete with its own chiptune and sound effects.',
		href: 'https://github.com/Nannakaroliina/aws-quest',
		tags: ['AWS', 'Game', 'Learning']
	},
	{
		title: 'Ravenwatch',
		description: 'A multi-specialist code review plugin for Claude: reviewers for bugs, loopholes and security, for PRs or a whole codebase.',
		href: 'https://github.com/Nannakaroliina/ravenwatch',
		tags: ['Claude', 'Agents', 'Code review']
	},
	{
		title: 'Novelsmith',
		description: 'A Claude plugin for authors: outline-first, multi-agent novel writing from premise and story bible to drafted scenes.',
		href: 'https://github.com/Nannakaroliina/novelsmith',
		tags: ['Claude', 'Agents', 'Writing']
	}
];

export const creative = {
	name: 'Nat Ravenveil',
	href: 'https://natravenveil.com',
	intro:
		'Alongside the day job I run Nat Ravenveil, a sole trader creative business. Nat Ravenveil is also my pen name.',
	strands: [
		{
			title: 'Writing',
			text: 'Urban noir and mystery novels, including The City of Shattered Truths, and the Marvel the Otter picture books for ages 4 to 8, which I write and illustrate.'
		},
		{
			title: 'Publishing',
			text: 'A registered publisher with my own ISBNs, distributing through KDP, IngramSpark and Draft2Digital. I also help other authors with covers, layout, metadata and distribution.'
		},
		{
			title: 'Art',
			text: 'Pencil and digital illustration, for my own books and on commission.'
		},
		{
			title: 'Music',
			text: 'AI-composed music, made to sit alongside the books and to stand on its own.'
		}
	]
};

export const hobbies =
	'When I’m not at a keyboard I’m usually outdoors in northern Finland: hiking, fishing and ice fishing, skiing, or training my puppy Nano. Some of my photography and digital art is below.';

// w and h are the image's pixel size, so the browser reserves its space before it loads.
export const gallery = [
	{ src: 'Glitch_effect3.jpg', w: 2000, h: 1333, title: 'Glitch effect with Photoshop', alt: 'Portrait with a glitch effect' },
	{ src: 'Cut.jpg', w: 1502, h: 2000, title: 'Cut-in-pieces portrait effect with Photoshop', alt: 'Portrait cut into strips' },
	{ src: 'Winter-wonderland.jpg', w: 1920, h: 1080, title: 'Winter portrait effect with Photoshop', alt: 'Wintery portrait edit' },
	{ src: 'being-present.webp', w: 1920, h: 1080, title: 'Being present, digital drawing', alt: 'Digital drawing of two women in profile, back to back, eyes closed, on a pastel background' },
	{ src: 'Figure.jpg', w: 2400, h: 2400, title: 'Portrait effect with Photoshop', alt: 'Stylised profile portrait' },
	{ src: 'Niko_dust.jpg', w: 1800, h: 1200, title: 'Becoming-dust portrait effect with Photoshop', alt: 'Portrait dissolving into dust' },
	{ src: 'riisitunturi-winter.jpg', w: 2000, h: 1318, title: 'Snowy winter in Riisitunturi', alt: 'Snow-crowned trees on a fell top under a blue sky, Riisitunturi' },
	{ src: 'Winter.jpg', w: 2000, h: 1328, title: 'Sunrise landscape photo', alt: 'Winter sunrise landscape' },
	{ src: 'Lady_with_rose.jpg', w: 1229, h: 1735, title: 'Lady with a rose, digital drawing', alt: 'Digital drawing of a lady with a rose' },
	{ src: 'hair-buns.jpg', w: 1920, h: 1080, title: 'Girl with hair buns, digital drawing', alt: 'Digital drawing of a girl from behind with braided hair and two buns' },
	{ src: 'grim-reaper.jpg', w: 900, h: 1125, title: 'Grim Reaper, pencil drawing', alt: 'Pencil drawing of the Grim Reaper holding a scythe, in a sketchbook' },
	{ src: 'Fish.jpg', w: 2000, h: 1125, title: 'Catching a fish', alt: 'Holding a freshly caught fish' },
	{ src: 'cherry-tree-london.jpg', w: 2000, h: 1333, title: 'Cherry tree in London', alt: 'Close-up of pink cherry blossoms on a branch' },
	{ src: 'gallery6.jpg', w: 1920, h: 960, title: 'Sundown at Ruka ski centre, Kuusamo', alt: 'Sundown over Ruka fells' },
	{ src: 'gallery4.jpg', w: 1920, h: 960, title: 'Lake view from Kitka, Kuusamo', alt: 'Lake Kitka view' },
	{ src: '3droom.jpg', w: 960, h: 533, title: '3D room made with Blender', alt: '3D rendered room' }
];
