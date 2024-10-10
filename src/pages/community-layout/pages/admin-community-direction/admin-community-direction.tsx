import { type FC } from 'react'
import {
	type DirectionInputs,
	directionSchema,
} from 'src/pages/community-layout/pages/admin-community-direction/schema'

import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { Helmet } from 'react-helmet-async'
import { yupResolver } from '@hookform/resolvers/yup'

import { AdminRoute } from 'src/routes/admin-routes/consts'
import { AdminContent } from 'src/components/admin-content/admin-content'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { PlusIconBlockSvg } from 'src/UI/icons/plusIconBlockSVG'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { DirectionSection } from 'src/pages/community-layout/pages/admin-community-direction/components/direction-section/direction-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const AdminCommunityDirection: FC = () => {
	const methods = useForm<DirectionInputs>({
		mode: 'onBlur',
		resolver: yupResolver(directionSchema),
	})

	const onSubmit: SubmitHandler<DirectionInputs> = (data) => {
		console.log(data)
	}
	return (
		<>
			<Helmet>
				<title>Правление</title>
			</Helmet>
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
						<DirectionSection
							directionTitle='Первые лица Правления'
							directionSubtitle='Председатели'
							fieldName='topOfficials'
						/>
						<DirectionSection
							directionTitle='Вторые лица Правления'
							directionSubtitle='Заместители председателя'
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
