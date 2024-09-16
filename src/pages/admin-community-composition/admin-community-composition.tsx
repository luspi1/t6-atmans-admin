import { type FC } from 'react'
import {
	type CompositionInputs,
	compositionSchema,
} from 'src/pages/admin-community-composition/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { PlusIconBlockSvg } from 'src/UI/icons/plusIconBlockSVG'
import { CompositionSection } from 'src/pages/admin-community-composition/components/composition-section/composition-section'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'
import { AdminRoute } from 'src/routes/admin-routes/consts'
export const AdminCommunityComposition: FC = () => {
	const methods = useForm<CompositionInputs>({
		mode: 'onBlur',
		resolver: yupResolver(compositionSchema),
	})

	const onSubmit: SubmitHandler<CompositionInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Состав правления</title>
			</Helmet>
			<h1>Состав правления</h1>
			<AdminContent $padding='30px 30px 35px'>
				<AdminButton
					className={adminStyles.adminViewPageLink}
					as='link'
					to='/'
					$margin='0 0 29px 0'
					$outlined
				>
					Посмотреть страницу на сайте
				</AdminButton>
				<FormProvider {...methods}>
					<form onSubmit={methods.handleSubmit(onSubmit)} noValidate>
						<CompositionSection
							compositionTitle='Первые лица Правления'
							compositionSubtitle='Председатели'
							fieldName='topOfficials'
						/>
						<CompositionSection
							compositionTitle='Вторые лица Правления'
							compositionSubtitle='Заместители председателя'
							fieldName='secondaryOfficials'
						/>
						<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
							<button className={styles.addBlockBtn} type='button'>
								<PlusIconBlockSvg />
								Добавить еще один блок
							</button>
						</AdminSection>
						<AdminControllers outLink={AdminRoute.AdminHome} />
					</form>
				</FormProvider>
			</AdminContent>
		</>
	)
}
