import { type TabNavigationItem } from 'src/types/navigation'

export const profileTabs: TabNavigationItem[] = [
	{
		title: 'Профиль',
		link: '/profile',
		exact: true,
	},
	{
		title: 'Списки',
		link: 'profile-lists',
	},
	{
		title: 'Транспорт',
		link: 'profile-transport',
	},
	{
		title: 'Группы',
		link: 'profile-groups',
	},
	{
		title: 'События',
		link: 'profile-events',
	},
]
