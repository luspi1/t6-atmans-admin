import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

export type UserProfileInputs = {
	userSurname: string
	userName: string
	userPatronymic?: string
	userAlias?: string
	userBirthday: Date
	userIsHideBirthday?: boolean
	userAvatar: FileWithPreview[]
	userSite?: string
	userEmail?: string
	userPhone?: string
	userIsHidePhone?: boolean
	userRegionList: string
	userLocality: string
	userDesc?: string
	userPassword: string
	userPasswordConfirm: string
}

export const userProfileSchema = yup.object().shape({
	userSurname: yup.string().required('Введите фамилию'),
	userName: yup.string().required('Введите имя'),
	userBirthday: yup.date().required('Дату рождения'),
	userAvatar: yup.array().min(1, 'Загрузите аватар').required('Загрузите аватар'),
	userSite: yup.string().url('Неверный формат адреса'),
	userEmail: yup.string().email('Неверный формат e-mail'),
	userRegionList: yup.string().required().notOneOf(['0'], 'Выберите регион'),
	userLocality: yup.string().required('Укажите населенный пункт'),
	userPassword: yup
		.string()
		.required('Пароль обязателен для заполнения')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	userPasswordConfirm: yup
		.string()
		.required('Необходимо ввести пароль еще раз')
		.oneOf([yup.ref('userPassword')], 'Пароли не совпадают'),
})
