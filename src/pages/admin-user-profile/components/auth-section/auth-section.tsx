import { AdminSection } from 'src/components/admin-section/admin-section'
import { CustomText } from 'src/components/custom-text/custom-text'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { Link } from 'react-router-dom'
import { AdminRoute } from 'src/routes/admin-routes/consts'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const AuthSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput
				$promptPadding='0'
				promptContent={
					<span>
						Логин нельзя изменить вручную. <br />
						<Link to={AdminRoute.AdminHome}>Обратиться к администратору для смены логина</Link>
					</span>
				}
			>
				<div>
					<CustomText $margin='0 0 2px 0'>Логин (e-mail) *</CustomText>
					<CustomText $fontSize='20px' $fontWeight='600'>
						example@example.com
					</CustomText>
				</div>
			</PromptInput>
			<PromptInput promptContent='Укажите новый пароль только в том случае, если хотите сменить существующий.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userPassword'
					label='Пароль *'
					placeholder='*************'
					type='password'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Повторите пароль, если решили его сменить.' $margin='0'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userPasswordConfirm'
					label='Повторите пароль *'
					placeholder='*************'
					type='password'
					margin='0'
				/>
			</PromptInput>
		</AdminSection>
	)
}
