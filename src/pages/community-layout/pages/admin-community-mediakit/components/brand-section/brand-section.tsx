import { type FC } from 'react'

import cn from 'classnames'

import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledMaskedInput } from 'src/components/controlled-masked-input/controlled-masked-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import mediaStyles from '../../index.module.scss'

export const BrandSection: FC = () => {
	return (
		<AdminSection titleText='Бренд-бук'>
			<ControlledInput
				className={cn(adminStyles.adminMainInput, mediaStyles.mediaTextarea)}
				name='brandBookDescription'
				label='Короткое описание'
				placeholder='Поле ввода текста'
				margin='0 0 15px 0'
				isTextarea
			/>
			<ControlledMaskedInput
				className={cn(adminStyles.adminMainInput, mediaStyles.versionInput)}
				name='brandBookVersion'
				label='Номер версии'
				placeholder='Номер версии'
				mask={Number}
			/>
			<ReactDropzone
				name='brandBookPdf'
				variant='text'
				label='Загрузить PDF'
				uploadBtnText='Загрузить документ в формате PDF'
				margin='0 0 15px 0'
				accept={{
					'application/pdf': ['.pdf'],
				}}
			/>
			<ReactDropzone
				name='brandBookDocx'
				variant='text'
				label='Загрузить DOCX'
				uploadBtnText='Загрузить документ в формате DOCX'
				accept={{
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
				}}
			/>
		</AdminSection>
	)
}
