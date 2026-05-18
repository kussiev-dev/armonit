export interface Project {
	title: string
	description: string
	link: string
	thumbnail: string
	image: string
}

export const projects: Project[] = [
	{
		title: 'VekStroy',
		description:
			'Сайт строительной компании "VekStroy". Полноценный интернет-магазин',
		link: 'https://vekstroy.ru/',
		thumbnail: '/images/portfolio/vekstroy/thumbnail.png',
		image: '/images/portfolio/vekstroy/vekstroy.png'
	},
	{
		title: 'FordEx6',
		description:
			'Сайт по продаже автозапчастей на Ford Explorer 6 - FordEx6. Полноценный интернет-магазин',
		link: 'https://kussiev-dev.github.io/fordex6',
		thumbnail: '/images/portfolio/fordex6/thumbnail.png',
		image: '/images/portfolio/fordex6/fordex6.png'
	}
]
