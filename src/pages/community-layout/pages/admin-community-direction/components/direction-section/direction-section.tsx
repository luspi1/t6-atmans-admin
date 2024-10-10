import { type FC } from 'react'
import { type DirectionInputs } from 'src/pages/community-layout/pages/admin-community-direction/schema'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { numberToWord } from 'src/helpers/utils'

import styles from './index.module.scss'
import adminStyles from 'src/routes/admin-layout/index.module.scss'

type CompositionSectionProps = {
	directionTitle: string
	directionSubtitle: string
	fieldName: string
}
export const DirectionSection: FC<CompositionSectionProps> = ({
	directionTitle,
	directionSubtitle,
	fieldName,
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext<DirectionInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: fieldName,
	})

	return (
		<AdminSection
			className={styles.directionSection}
			titleText={directionTitle}
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<h3>{directionSubtitle}</h3>
			<ul>
				{fields?.map((field, idx) => (
					<li className={styles.directionItem} key={field.id}>
						<button className={styles.directionRemoveBtn} type='button' onClick={() => remove(idx)}>
							<RemoveBlockSvg />
						</button>
						<h4>{numberToWord(idx + 1)} персона</h4>
						<ReactDropzone
							className={styles.directionDropzone}
							label='Фотография'
							name={`${fieldName}.${idx}.directionPhoto`}
							prompt='Перетащите изображение на это поле'
							accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.directionFullname`}
							dynamicError={errors[fieldName]?.[idx]?.directionFullname}
							label='ФИО персоны'
							placeholder='Фамилия, имя, отчество полностью'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.directionPosition`}
							dynamicError={errors[fieldName]?.[idx]?.directionPosition}
							label='Должность'
							placeholder='Должность'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`${fieldName}.${idx}.directionLink`}
							dynamicError={errors[fieldName]?.[idx]?.directionLink}
							label='Ссылка на персональную страницу'
							placeholder='www...'
							margin='0 0 10px 0'
						/>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							directionPhoto: [],
							directionFullname: '',
							directionPosition: '',
							directionLink: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить персону
			</AdminButton>
		</AdminSection>
	)
}
