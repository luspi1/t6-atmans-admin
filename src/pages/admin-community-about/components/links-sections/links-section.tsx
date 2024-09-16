import { type FC } from 'react'
import { type CommunityInputs } from 'src/pages/admin-community-about/schema'

import cn from 'classnames'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminSection } from 'src/components/admin-section/admin-section'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import styles from './index.module.scss'

export const LinksSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<CommunityInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'importantLinks',
	})

	return (
		<AdminSection
			titleText='Важные ссылки'
			sectionName='linksSection'
			switcherText='Включить блок ссылок'
		>
			<ControlledInput
				className={cn(adminStyles.adminMainInput)}
				name='nameBlockLinks'
				label='Название блока ссылок'
				placeholder='События'
				margin='0 0 24px 0'
			/>
			<ul className={cn(styles.linksList, adminStyles.adminDynamicList)}>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>Ссылка {idx + 1}</h4>
						<ControlledInput
							className={cn(adminStyles.adminMainInput)}
							name={`importantLinks.${idx}.textLink`}
							dynamicError={errors?.importantLinks?.[idx]?.textLink}
							label='Текст'
							placeholder='Текст ссылки'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={cn(adminStyles.adminMainInput)}
							name={`importantLinks.${idx}.urlAddress`}
							dynamicError={errors.importantLinks?.[idx]?.urlAddress}
							label='Адрес URL'
							placeholder='Например, www.site.ru'
							margin='0'
						/>
						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить ссылку
							</button>
						)}
					</li>
				))}
			</ul>
			<AdminButton
				className={styles.addLinkBtn}
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							textLink: '',
							urlAddress: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить еще одну ссылку
			</AdminButton>
		</AdminSection>
	)
}
