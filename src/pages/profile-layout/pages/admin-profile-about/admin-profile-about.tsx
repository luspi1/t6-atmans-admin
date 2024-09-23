import { type FC } from 'react'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type ProfileAboutInputs } from 'src/pages/profile-layout/pages/admin-profile-about/schema'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import styles from './index.module.scss'

export const AdminProfileAbout: FC = () => {
	const methods = useForm<ProfileAboutInputs>({
		mode: 'onBlur',
	})

	const onSubmit: SubmitHandler<ProfileAboutInputs> = (data) => {
		console.log(data)
	}
	return (
		<AdminContent $height='700px'>
			<h3>О себе</h3>
			<FormProvider {...methods}>
				<form
					className={styles.aboutForm}
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
					autoComplete='off'
				>
					<PromptInput promptContent='Напишите о себе'>
						<ControlledInput
							name='aboutText'
							label='Несколько слов о себе'
							margin='0'
							placeholder='Начните писать текст...'
							isTextarea
						/>
					</PromptInput>
					<PromptInput promptContent='Ваш Telegram'>
						<ControlledInput
							name='aboutTg'
							label='Название учетной записи в Telegram'
							placeholder='@example'
							margin='0'
						/>
					</PromptInput>
					<PromptInput promptContent='Ваш ВКонтакте'>
						<ControlledInput
							name='aboutVk'
							label='Адрес страницы ВКонтакте'
							placeholder='www.example.com'
							margin='0'
						/>
					</PromptInput>
					<PromptInput promptContent='Ваш Odnoklassniki'>
						<ControlledInput
							name='aboutOk'
							label='Адрес страницы Odnoklassniki'
							placeholder='www.example.com'
							margin='0'
						/>
					</PromptInput>
					<PromptInput promptContent='Ваш RuTube'>
						<ControlledInput
							name='aboutRutube'
							label='Адрес канала RuTube'
							placeholder='www.example.com'
							margin='0'
						/>
					</PromptInput>

					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
