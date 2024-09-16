import { type FC, type ReactNode } from 'react'

import cn from 'classnames'

import { AdminSectionContent } from 'src/components/admin-section/components/admin-section-content/admin-section-content'
import { AdminSwitcher } from 'src/components/admin-switcher/admin-switcher'
import { useFormContext } from 'react-hook-form'

import styles from './index.module.scss'

type AdminSectionProps = {
	children: ReactNode
	sectionName?: string
	className?: string
	switcherClassName?: string
	titleText?: string
	switcherText?: string | ReactNode
	contentPadding?: string
	contentMaxWidth?: string
	contentBorder?: string
	contentBg?: string
}

export const AdminSection: FC<AdminSectionProps> = ({
	children,
	sectionName,
	className,
	switcherClassName,
	titleText,
	switcherText,
	contentPadding,
	contentMaxWidth,
	contentBorder,
	contentBg,
}) => {
	const { watch } = useFormContext()

	const isChecked = sectionName ? watch(sectionName) : true

	return (
		<section className={cn(styles.adminSection, { [styles._disable]: !isChecked }, className)}>
			{(titleText ?? sectionName) && (
				<div className={styles.adminSectionHead}>
					{titleText && <h2>{titleText}</h2>}
					{sectionName && (
						<AdminSwitcher className={switcherClassName} name={sectionName} label={switcherText} />
					)}
				</div>
			)}
			{isChecked && (
				<AdminSectionContent
					$maxWidth={contentMaxWidth}
					$padding={contentPadding}
					$background={contentBg}
					$border={contentBorder}
				>
					{children}
				</AdminSectionContent>
			)}
		</section>
	)
}
