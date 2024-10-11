import { type FC } from 'react'
import {
	type MediakitInputs,
	mediaPressSchema,
} from 'src/pages/community-layout/pages/admin-community-mediakit/schema'

import { Helmet } from 'react-helmet-async'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { TitleSection } from 'src/pages/community-layout/pages/admin-community-mediakit/components/title-section/title-section'
import { BrandSection } from 'src/pages/community-layout/pages/admin-community-mediakit/components/brand-section/brand-section'
import { PressSection } from 'src/pages/community-layout/pages/admin-community-mediakit/components/press-section/press-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminCommunityMediakit: FC = () => {
	const methods = useForm<MediakitInputs>({
		mode: 'onBlur',
		resolver: yupResolver(mediaPressSchema),
		defaultValues: {
			brandBookPdf: [],
			brandBookDocx: [],
			pressSection: true,
			pressDocs: [
				{
					pressTitle: '',
					pressVersion: '',
					pressDocPdf: [],
					pressDocDocx: [],
					pressDocArchive: [],
				},
			],
		},
	})

	const onSubmit: SubmitHandler<MediakitInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Медиакит</title>
			</Helmet>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to={`/`}
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<BrandSection />
						<PressSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
