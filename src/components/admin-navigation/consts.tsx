import { type NavigationItem } from 'src/types/navigation'
import { AdminNewsIconSvg } from 'src/UI/icons/adminNewsIconSVG'
import { AdminDepartmentsIconSvg } from 'src/UI/icons/adminDepartmentsIconSVG'
import { AdminSupportIconSvg } from 'src/UI/icons/adminSupportIconSVG'
import { AdminEthnoIconSvg } from 'src/UI/icons/adminEthnoIconSVG'

import { AdminEventsIconSvg } from 'src/UI/icons/adminEventsIconSVG'
import { AdminSettingsIconSvg } from 'src/UI/icons/adminSettingsIconSVG'
import { AdminProfileIconSvg } from 'src/UI/icons/adminProfileIconSVG'
import { AdminFederationIconSvg } from 'src/UI/icons/adminFederationIconSVG'
import { AdminParticipantsIconSvg } from 'src/UI/icons/AdminParticipantsIconSvg'

export const adminMenuItems: NavigationItem[] = [
	{
		title: 'Мой профиль',
		link: 'profile',
		icon: <AdminProfileIconSvg />,
	},
	{
		title: 'Новости',
		icon: <AdminNewsIconSvg />,
		link: 'news-list',
	},
	{
		title: 'Федерация',
		icon: <AdminFederationIconSvg />,
		link: 'federation',
	},
	{
		title: 'Отделения',
		icon: <AdminDepartmentsIconSvg />,
		link: 'departments-list',
	},
	{
		title: 'Этноспорт',
		icon: <AdminEthnoIconSvg />,
		link: 'ethno',
	},
	{
		title: 'Участники',
		icon: <AdminParticipantsIconSvg />,
		link: 'participants-list',
	},
	{
		title: 'События',
		icon: <AdminEventsIconSvg />,
		link: 'admin-events',
		childItems: [
			{
				title: 'Организатор',
				link: 'organizer-profile',
			},
			{
				title: 'Список событий',
				link: 'events-list',
			},
			{
				title: 'Новое событие',
				link: 'event-new',
			},
		],
	},
	{
		title: 'Поддержка',
		link: 'support',
		icon: <AdminSupportIconSvg />,
	},
	{
		title: 'Настройка Системы',
		icon: <AdminSettingsIconSvg />,
		link: 'admin-settings',
		childItems: [
			{
				title: 'Главная страница',
				link: 'settings-home',
			},
			{
				title: 'Обратная связь',
				link: 'settings-feedback',
			},
			{
				title: 'Пользователи',
				link: 'settings-users',
			},
			{
				title: 'Структура страниц',
				link: 'settings-structure',
			},
			{
				title: 'Встраиваемые блоки',
				link: 'settings-blocks',
			},
		],
	},
]
