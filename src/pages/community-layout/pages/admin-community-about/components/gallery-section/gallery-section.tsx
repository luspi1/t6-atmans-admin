import { type FC } from 'react'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'
import { AdminSection } from 'src/components/admin-section/admin-section'

import styles from './index.module.scss'
export const GallerySection: FC = () => {
	return (
		<AdminSection
			titleText='Фотогалерея'
			sectionName='gallerySection'
			switcherText='Включить галерею'
			contentBorder='none'
			contentBg='none'
			contentPadding='0'
		>
			<ReactDropzone
				className={styles.galleryDropzone}
				dzAreaClassName={styles.galleryArea}
				name='galleryImages'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
				maxFiles={5}
				multiple
				customUploadBtn={
					<AdminButton as='button' type='button' $padding='9.5px 14px' $common>
						Загрузить фото
					</AdminButton>
				}
			/>
		</AdminSection>
	)
}
