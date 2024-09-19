import { type FC } from 'react'

import { AdminContent } from 'src/components/admin-content/admin-content'
import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { AdminControllers } from 'src/components/admin-controllers/admin-controllers'
import { AdminRoute } from 'src/routes/admin-routes/consts'

import { yupResolver } from '@hookform/resolvers/yup'
import {
	type ProfileMainInputs,
	profileMainSchema,
} from 'src/pages/profile-layout/pages/admin-profile-main/schema'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

import styles from './index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'

export const AdminProfileMain: FC = () => {
	const methods = useForm<ProfileMainInputs>({
		mode: 'onBlur',
		resolver: yupResolver(profileMainSchema),
	})

	const onSubmit: SubmitHandler<ProfileMainInputs> = (data) => {
		console.log(data)
	}
	return (
		<AdminContent $padding='25px 30px 35px'>
			<h3>Профиль</h3>
			<FormProvider {...methods}>
				<form
					className={styles.profileForm}
					onSubmit={methods.handleSubmit(onSubmit)}
					noValidate
					autoComplete='off'
				>
					<PromptInput promptContent='Ваша фамилия'>
						<ControlledInput name='profileSurname' label='Фамилия *' margin='0' />
					</PromptInput>
					<PromptInput promptContent='Ваше имя'>
						<ControlledInput name='profileName' label='Имя *' margin='0' />
					</PromptInput>
					<PromptInput promptContent='Ваше отчество'>
						<ControlledInput name='profilePatronymic' label='Отчество' margin='0' />
					</PromptInput>
					<PromptInput promptContent='Ваше прозвище'>
						<ControlledInput name='profileNickname' label='Прозвище / позывной' margin='0' />
					</PromptInput>
					<GridRow $template='auto/ 204px minmax(150px, 330px)' $gap='0 30px' $margin='0 0 17px 0'>
						<ControlledDateInput
							name='profileBirthday'
							label='Дата рождения *'
							dateFormat='dd.MM.yyyy'
							placeholder='дд.мм.гггг'
						/>
						<ControlledCheckbox
							margin='31px 0 0 0'
							name='isHiddenAge'
							type='checkbox'
							label='Скрыть мой возраст из публичного доступа'
						/>
					</GridRow>
					<ReactDropzone
						name='profileAvatar'
						label='Аватар *'
						prompt='соотношение сторон 1:1 или 3:4, JPEG, PNG'
						margin='0 0 15px 0'
						accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
					/>
					<PromptInput promptContent='Ваш интернет-сайт' $margin='17px 0 17px 0'>
						<ControlledInput
							name='profileSite'
							label='Интернет-сайт'
							placeholder='www.example.com'
							margin='0'
						/>
					</PromptInput>
					<PromptInput promptContent='Ваш e-mail'>
						<ControlledInput
							name='profileEmail'
							label='Контактный e-mail'
							placeholder='example@example.com'
							margin='0'
						/>
					</PromptInput>
					<GridRow
						$template='auto / 180px minmax(150px, 330px) minmax(150px, 280px)'
						$gap='0 30px'
						$margin='0 0 17px 0'
					>
						<ControlledMaskedInput
							name='profilePhone'
							placeholder='+7 (999) 999-99-99'
							label='Номер телефона'
							mask='{+7} (000) 000-00-00'
						/>
						<ControlledCheckbox
							margin='31px 0 0 0'
							name='isHiddenPhone'
							type='checkbox'
							label='Скрыть мой номер из публичного доступа'
						/>
						<ControlledCheckbox
							margin='31px 0 0 0'
							name='isConnectedTelegram'
							type='checkbox'
							label='К этом номеру подключен Telegram'
						/>
					</GridRow>
					<GridRow $template='auto / minmax(180px, 1fr) minmax(210px, 1fr)'>
						<ControlledSelect
							label='Регион и город *'
							selectOptions={[
								{ label: 'выбрать регион', value: '0' },
								{ label: 'Регион 1', value: '1' },
							]}
							name='profileRegion'
						/>
						<PromptInput
							promptContent='Ваш населенный пункт'
							$margin='25px 0 0 0'
							$padding='6px 0 0 0'
						>
							<ControlledInput
								name='profileCity'
								placeholder='Название населенного пункта'
								margin='0'
							/>
						</PromptInput>
					</GridRow>
					<PromptInput
						promptContent={
							<>
								<p>Логин нельзя изменить вручную.</p>
								<a href='#'>Обратиться к администратору для смены логина</a>
							</>
						}
						$padding='2px 0 0 0'
						$margin='15px 0 0 0'
						$template='auto / 170px 17px'
					>
						Логин (номер телефона)
					</PromptInput>
					<CustomText $fontSize='20px' $fontWeight='600' $margin='0 0 17px 0'>
						79110009887
					</CustomText>
					<PromptInput $maxWidth='606px' promptContent='Ваш пароль'>
						<ControlledInput
							label='Пароль *'
							name='profilePassword'
							type='password'
							placeholder='*************'
							margin='0'
						/>
					</PromptInput>
					<PromptInput $maxWidth='606px' promptContent='Повторите Ваш пароль'>
						<ControlledInput
							label='Повторите пароль *'
							name='profilePasswordConfirm'
							type='password'
							placeholder='*************'
							margin='0'
						/>
					</PromptInput>
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
