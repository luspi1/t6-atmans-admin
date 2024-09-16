import { type TabNavigationItem } from 'src/types/navigation'

export const profileTabs: TabNavigationItem[] = [
	{
		title: 'Профиль',
		link: '/profile',
		exact: true,
	},
	{
		title: 'О себе',
		link: 'profile-about',
	},
	{
		title: 'Заявки на события',
		link: 'profile-event-requests',
	},
]
