import { AdminSection } from 'src/components/admin-section/admin-section'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { CustomText } from 'src/components/custom-text/custom-text'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const ContactsSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Адрес сайта или страницы в социальной сети'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userSite'
					label='Интернет-сайт'
					placeholder='www.example.com'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Ваш контактный e-mail. Рекомендуем не применять один и тот же и как логин и как контактный'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userEmail'
					label='Контактный e-mail'
					placeholder='example@example.com'
					margin='0'
				/>
			</PromptInput>
			<div>
				<CustomText $margin='0 0 5px 0' $fontWeight='600'>
					Номер телефона
				</CustomText>
				<GridRow $template='auto/204px 320px' $margin='0' $alignItems='center'>
					<ControlledInput
						className={adminStyles.adminMainInput}
						name='userPhone'
						mask='9 (999) 999-99-99'
						placeholder='+7 911 000 92 24'
						margin='0'
					/>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='userIsHidePhone'
						label='Скрыть мой номер из публичного доступа'
						margin='0'
						type='checkbox'
					/>
				</GridRow>
			</div>
		</AdminSection>
	)
}
