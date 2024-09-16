import { AdminSection } from 'src/components/admin-section/admin-section'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const ContactsSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Адрес сайта или страницы в социальной сети'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgSite'
					label='Интернет-сайт'
					placeholder='www.example.com'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Ваш контактный e-mail. Рекомендуем не применять один и тот же и как логин и как контактный'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgEmail'
					label='Контактный e-mail'
					placeholder='example@example.com'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Это публичный номер телефона, его видят все.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgPhone'
					label='Публичный телефон'
					mask='9 (999) 999-99-99'
					placeholder='+7 965 097 04 34'
					margin='0'
				/>
			</PromptInput>
			<PromptInput
				promptContent='Это контактный номер телефона, который знает только администратор системы.'
				$margin='0'
			>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgContactPhone'
					label='Контактный телефон'
					mask='9 (999) 999-99-99'
					placeholder='+7 911 000 92 24'
					margin='0'
				/>
			</PromptInput>
		</AdminSection>
	)
}
