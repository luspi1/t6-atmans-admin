import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'

import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import {
	type CommunityInputs,
	communitySchema,
} from 'src/pages/community-layout/pages/admin-community-about/schema'
import { TitleSection } from 'src/pages/community-layout/pages/admin-community-about/components/title-section/title-section'
import { LinksSection } from 'src/pages/community-layout/pages/admin-community-about/components/links-sections/links-section'
import { GallerySection } from 'src/pages/community-layout/pages/admin-community-about/components/gallery-section/gallery-section'
import { ArticleSection } from 'src/pages/community-layout/pages/admin-community-about/components/article-section/article-section'
import { DocumentsSection } from 'src/pages/community-layout/pages/admin-community-about/components/documents-section/documents-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminCommunityAbout: FC = () => {
	const methods = useForm<CommunityInputs>({
		mode: 'onBlur',
		resolver: yupResolver(communitySchema),
		defaultValues: {
			aboutTitleImage: [],
			linksSection: true,
			importantLinks: [{ textLink: '', urlAddress: '' }],
			gallerySection: true,
			galleryImages: [],
			articleSection: true,
			docSection: true,
			docFiles: [],
		},
	})

	const onSubmit: SubmitHandler<CommunityInputs> = (data) => {
		console.log(data)
	}

	return (
		<>
			<Helmet>
				<title>О федерации</title>
			</Helmet>
			<AdminContent $padding='30px 30px 35px' title='О федерации' link='#'>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<TitleSection />
						<LinksSection />
						<GallerySection />
						<ArticleSection />
						<DocumentsSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
