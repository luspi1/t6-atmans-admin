import { type FC } from 'react'
import { type ContactsInputs, contactsSchema } from 'src/pages/admin-community-contacts/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { MapSection } from 'src/pages/admin-community-contacts/components/map-section/map-section'
import { MailSection } from 'src/pages/admin-community-contacts/components/mail-section/mail-section'
import { PhoneSection } from 'src/pages/admin-community-contacts/components/phones-section/phone-section'
import { EmailsSection } from 'src/pages/admin-community-contacts/components/emails-section/emails-section'
import { LinksSection } from 'src/pages/admin-community-contacts/components/links-section/links-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AdminCommunityContacts: FC = () => {
	const methods = useForm<ContactsInputs>({
		mode: 'onBlur',
		resolver: yupResolver(contactsSchema),
		defaultValues: {
			mailSection: true,
			phonesSection: true,
			phoneNumbers: [
				{
					phoneOwner: '',
					phoneAddress: '',
					phoneNumber: '',
				},
			],
			emailsSection: true,
			emails: [{ emailOwner: '', emailAddress: '' }],
			linksSection: true,
			links: [{ linkText: '', linkAddress: '' }],
		},
	})

	const onSubmit: SubmitHandler<ContactsInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Контакты и связь</title>
			</Helmet>
			<h1>Контакты и связь</h1>
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
						<MapSection />
						<MailSection />
						<PhoneSection />
						<EmailsSection />
						<LinksSection />
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
