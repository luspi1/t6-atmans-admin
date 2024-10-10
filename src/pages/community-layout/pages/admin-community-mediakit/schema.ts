import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type MediaPress = {
	pressTitle: string
	pressVersion: string
	pressDocPdf?: FileWithPreview[]
	pressDocDocx?: FileWithPreview[]
	pressDocArchive?: FileWithPreview[]
}

export type MediakitInputs = {
	titleText: string
	brandBookDescription: string
	brandBookVersion: string
	brandBookPdf?: FileWithPreview[]
	brandBookDocx?: FileWithPreview[]
	pressSection?: boolean
	pressDocs?: MediaPress[]
}

export const mediaPressSchema = yup.object().shape({
	titleText: yup.string().required('Введите заглавный текст'),
	brandBookDescription: yup.string().required('Введите описание бренд-бука'),
	brandBookVersion: yup.string().required('Введите номер версии'),
	pressSection: yup.boolean(),
	pressDocs: yup.array().when('pressSection', ([pressSection]) => {
		return pressSection
			? yup.array().of(
					yup.object().shape({
						pressTitle: yup.string().required('Введите название документа'),
						pressVersion: yup.string().required('Введите номер версии'),
					}),
				)
			: yup.array().notRequired()
	}),
})
