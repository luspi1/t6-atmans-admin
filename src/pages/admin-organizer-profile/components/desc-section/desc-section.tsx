import cnBind from 'classnames/bind'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/components/prompt-input/prompt-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const DescSection = () => {
	const cx = cnBind.bind(adminStyles)

	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Подробное описание организатора в нескольких фразах.'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='orgDesc'
					label='Подробное описание *'
					placeholder='Подробное описание организатора'
					margin='0'
					isTextarea
				/>
			</PromptInput>
			<PromptInput
				promptContent='Укажите отрасли деятельности организатора. Отрасль может быть написана в несколько слов, разные отрасли разделяются запятыми.'
				$margin='0'
			>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='orgIndustry'
					label='Отрасли деятельности *'
					placeholder='Одна отрасль, вторая отрасль, третья неожиданная отрасль'
					margin='0'
					isTextarea
				/>
			</PromptInput>
		</AdminSection>
	)
}
