import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type OrganizerProfileInputs = {
	orgShortName: string
	orgFullName: string
	orgTrademark: string
	orgRegionList: string
	orgLocality: string
	orgAvatar: FileWithPreview[]
	orgDesc: string
	orgIndustry: string
	orgSite?: string
	orgEmail?: string
	orgPhone?: string
	orgContactPhone?: string
	orgPassword: string
	orgPasswordConfirm: string
}

export const organizerProfileSchema = yup.object().shape({
	orgShortName: yup.string().required('Введите краткое наименование'),
	orgFullName: yup.string().required('Введите полное наименование'),
	orgTrademark: yup.string().required('Введите торговую марку'),
	orgRegionList: yup.string().required().notOneOf(['0'], 'Выберите регион'),
	orgLocality: yup.string().required('Укажите населенный пункт'),
	orgAvatar: yup.array().min(1, 'Загрузите аватар').required('Загрузите аватар'),
	orgDesc: yup.string().required('Введите подробное описание'),
	orgIndustry: yup.string().required('Укажите отрасли'),
	orgSite: yup.string().url('Неверный формат адреса'),
	orgEmail: yup.string().email('Неверный формат e-mail'),
	orgPassword: yup
		.string()
		.required('Пароль обязателен для заполнения')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	orgPasswordConfirm: yup
		.string()
		.required('Необходимо ввести пароль еще раз')
		.oneOf([yup.ref('orgPassword')], 'Пароли не совпадают'),
})
