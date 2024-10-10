import { type TabNavigationItem } from 'src/types/navigation'

export const communityTabs: TabNavigationItem[] = [
	{
		title: 'О федерации',
		link: '/federation',
		exact: true,
	},
	{
		title: 'История',
		link: 'fed-history',
	},
	{
		title: 'Правление',
		link: 'fed-direction',
	},
	{
		title: 'Контакты и связь',
		link: 'fed-contacts',
	},
	{
		title: 'Документы',
		link: 'fed-documents',
	},
	{
		title: 'Медиакит',
		link: 'fed-mediakit',
	},
	{
		title: 'Участники',
		link: 'fed-participants',
	},
	{
		title: 'Партнеры',
		link: 'fed-partners',
	},
]
