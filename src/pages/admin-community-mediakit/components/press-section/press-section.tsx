import { type FC } from 'react'
import { type MediakitInputs } from 'src/pages/admin-community-mediakit/schema'

import cn from 'classnames'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { RemoveBlockSvg } from 'src/UI/icons/removeBlockSVG'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import mediaStyles from 'src/pages/admin-community-mediakit/index.module.scss'
import styles from './index.module.scss'
export const PressSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<MediakitInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'pressDocs',
	})

	return (
		<AdminSection
			titleText='Для прессы'
			sectionName='pressSection'
			switcherText='Включить блок для прессы'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ul className={styles.pressList}>
				{fields?.map((field, idx) => (
					<li className={mediaStyles.mediaBlockItem} key={field.id}>
						{idx !== 0 && (
							<button
								className={mediaStyles.mediaRemoveBtn}
								type='button'
								onClick={() => remove(idx)}
							>
								<RemoveBlockSvg />
							</button>
						)}

						<h4>Документ {idx + 1}</h4>

						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`pressDocs.${idx}.pressTitle`}
							dynamicError={errors.pressDocs?.[idx]?.pressTitle}
							label='Название документа'
							placeholder='Название'
							margin='0 0 20px 0'
						/>
						<ControlledInput
							className={cn(adminStyles.adminMainInput, mediaStyles.versionInput)}
							name={`pressDocs.${idx}.pressVersion`}
							dynamicError={errors.pressDocs?.[idx]?.pressVersion}
							label='Номер версии'
							mask='999999999999999'
							maskPlaceholder=''
							placeholder='Номер версии'
							margin='0 0 24px 0'
						/>

						<h5>Загрузить документ</h5>
						<div className={styles.pressLinks}>
							<ReactDropzone
								name={`pressDocs.${idx}.pressDocPdf`}
								variant='text'
								uploadBtnText='Загрузить документ в формате PDF'
								margin='0'
								accept={{
									'application/pdf': ['.pdf'],
								}}
							/>
							<ReactDropzone
								name={`pressDocs.${idx}.pressDocDocx`}
								variant='text'
								uploadBtnText='Загрузить документ в формате DOCX'
								margin='0'
								accept={{
									'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
										'.docx',
									],
								}}
							/>
						</div>
						<p className={styles.pressLinksOr}>или</p>
						<ReactDropzone
							name={`pressDocs.${idx}.pressDocArchive`}
							variant='text'
							uploadBtnText='Загрузить файл архива'
							margin='0'
							accept={{
								'application/zip': ['.zip'],
								'application/vnd.rar': ['.rar'],
								'application/x-7z-compressed': ['.7z'],
							}}
						/>
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() => {
					append(
						{
							pressTitle: '',
							pressVersion: '',
							pressDocPdf: [],
							pressDocDocx: [],
							pressDocArchive: [],
						},
						{ shouldFocus: false },
					)
				}}
			>
				Добавить документ
			</AdminButton>
		</AdminSection>
	)
}
