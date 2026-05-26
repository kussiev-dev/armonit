export interface Project {
	title: string
	description: string
	link: string
	thumbnail: string
	image: string
}

const base = import.meta.env.BASE_URL

export const projects: Project[] = [
	{
		title: 'VekStroy',
		description:
			'Сайт строительной компании "VekStroy". Полноценный интернет-магазин',
		link: 'https://vekstroy.ru/',
		thumbnail: `${base}images/portfolio/vekstroy/thumbnail.png`,
		image: `${base}images/portfolio/vekstroy/vekstroy.png`
	},
	{
		title: 'FordEx6',
		description:
			'Сайт по продаже автозапчастей на Ford Explorer 6 - FordEx6. Полноценный интернет-магазин',
		link: 'https://kussiev-dev.github.io/fordex6',
		thumbnail: `${base}images/portfolio/fordex6/thumbnail.png`,
		image: `${base}images/portfolio/fordex6/fordex6.png`
	}
]
