import { type FC } from 'react'

import { Helmet } from 'react-helmet-async'

import { AdminContent } from 'src/components/admin-content/admin-content'

export const AdminCommunityPhotos: FC = () => {
	return (
		<>
			<Helmet>
				<title>Фото и видео</title>
			</Helmet>
			<h1>Фото и видео</h1>
			<AdminContent>Фото и видео контент</AdminContent>
		</>
	)
}
