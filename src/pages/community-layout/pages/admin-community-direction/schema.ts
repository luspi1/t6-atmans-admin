import { type FileWithPreview } from 'src/types/files'
import * as yup from 'yup'

type DirectionSectionInputs = {
	directionPhoto?: FileWithPreview[]
	directionFullname: string
	directionPosition: string
	directionLink: string
}

export type DirectionInputs = Record<string, DirectionSectionInputs[]>

export const directionSchema = yup.object().shape({
	topOfficials: yup.array().of(
		yup.object().shape({
			directionFullname: yup.string().required('Введите ФИО'),
			directionPosition: yup.string().required('Введите должность'),
			directionLink: yup.string().required('Введите ссылку'),
		}),
	),
	secondaryOfficials: yup.array().of(
		yup.object().shape({
			directionFullname: yup.string().required('Введите ФИО'),
			directionPosition: yup.string().required('Введите должность'),
			directionLink: yup.string().required('Введите ссылку'),
		}),
	),
})
