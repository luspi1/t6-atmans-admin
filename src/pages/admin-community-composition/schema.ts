import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

type CompositionSectionInputs = {
	compositionPhoto?: FileWithPreview[]
	compositionFullname: string
	compositionPosition: string
	compositionLink: string
}

export type CompositionInputs = Record<string, CompositionSectionInputs[]>

export const compositionSchema = yup.object().shape({
	topOfficials: yup.array().of(
		yup.object().shape({
			compositionFullname: yup.string().required('Введите ФИО'),
			compositionPosition: yup.string().required('Введите должность'),
			compositionLink: yup.string().required('Введите ссылку'),
		}),
	),
	secondaryOfficials: yup.array().of(
		yup.object().shape({
			compositionFullname: yup.string().required('Введите ФИО'),
			compositionPosition: yup.string().required('Введите должность'),
			compositionLink: yup.string().required('Введите ссылку'),
		}),
	),
})
