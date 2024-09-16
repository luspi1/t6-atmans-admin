import { type FC } from 'react'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import {
	type OrganizerProfileInputs,
	organizerProfileSchema,
} from 'src/pages/admin-organizer-profile/schema'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { TitleSection } from 'src/pages/admin-organizer-profile/components/title-section/title-section'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AvatarSection } from 'src/pages/admin-organizer-profile/components/avatar-section/avatar-section'
import { DescSection } from 'src/pages/admin-organizer-profile/components/desc-section/desc-section'
import { ContactsSection } from 'src/pages/admin-organizer-profile/components/contacts-section/contacts-section'
import { AuthSection } from 'src/pages/admin-organizer-profile/components/auth-section/auth-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
export const AdminOrganizerProfile: FC = () => {
	const methods = useForm<OrganizerProfileInputs>({
		mode: 'onBlur',
		resolver: yupResolver(organizerProfileSchema),
		defaultValues: {
			orgAvatar: [],
		},
	})

	const onSubmit: SubmitHandler<OrganizerProfileInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Профиль организатора</title>
			</Helmet>
			<h1>Профиль организатора</h1>
			<AdminContent $padding='25px 30px 35px'>
				<p className={adminStyles.adminPrompt}>
					поля, отмеченные символом *, обязательны для заполнения
				</p>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
						<TitleSection />
						<AvatarSection />
						<DescSection />
						<ContactsSection />
						<AuthSection />
						<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
