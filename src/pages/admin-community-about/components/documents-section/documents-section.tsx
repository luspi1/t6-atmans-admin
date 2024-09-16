import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { RemoveFileSvg } from 'src/UI/icons/removeFileSVG'
import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'
export const DocumentsSection: FC = () => {
	return (
		<AdminSection
			titleText='Документы на странице'
			sectionName='docSection'
			switcherText='Включить блок документов'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ReactDropzone
				className={styles.docDropzone}
				dzAreaClassName={styles.docArea}
				name='docFiles'
				removeIcon={<RemoveFileSvg />}
				accept={{
					'application/pdf': ['.pdf'],
					'application/msword': ['.doc'],
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
				}}
				maxFiles={5}
				multiple
				customUploadBtn={
					<AdminButton as='button' type='button' $padding='9.5px 12px' $common>
						Добавить документ
					</AdminButton>
				}
			/>
		</AdminSection>
	)
}
