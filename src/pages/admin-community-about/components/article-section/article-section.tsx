import { type FC } from 'react'
import cn from 'classnames'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const ArticleSection: FC = () => {
	return (
		<AdminSection
			titleText='Основная статья'
			sectionName='articleSection'
			switcherText='Включить основную статью'
		>
			<ControlledInput
				className={adminStyles.adminMainInput}
				name='articleName'
				label='Название статьи'
				placeholder='Название статьи'
				margin='0 0 15px 0'
			/>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, styles.articleField)}
				name='articleText'
				label='Текст статьи'
				placeholder='Поле ввода текста статьи'
				margin='0'
				isTextarea
			/>
		</AdminSection>
	)
}
