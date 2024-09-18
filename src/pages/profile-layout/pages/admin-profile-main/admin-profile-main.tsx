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
				<form onSubmit={methods.handleSubmit(onSubmit)} noValidate autoComplete='off'>
					<PromptInput promptContent='Ваша фамилия'>
						<ControlledInput name='profileSurname' label='Фамилия *' margin='0' />
					</PromptInput>
					<PromptInput promptContent='Номер телефона'>
						<ControlledMaskedInput
							name='profilePhone'
							label='Номер *'
							mask='{+7} (000) 000-00-00'
						/>
					</PromptInput>
					<AdminControllers outLink={AdminRoute.AdminHome} variant='2' />
				</form>
			</FormProvider>
		</AdminContent>
	)
}
