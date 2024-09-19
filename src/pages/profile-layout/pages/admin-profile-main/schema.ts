import { type FileWithPreview } from 'src/types/files'

import * as yup from 'yup'
import { validatePhoneNumber } from 'src/helpers/input-validations'

export type ProfileMainInputs = {
	profileSurname: string
	profileName: string
	profilePatronymic?: string
	profileNickname?: string
	profileBirthday: Date
	isHiddenAge?: boolean
	profileAvatar: FileWithPreview[]
	profileSite?: string
	profileEmail?: string
	profilePhone?: string
	isHiddenPhone?: boolean
	isConnectedTelegram?: boolean
	profileRegion: string
	profileCity: string
	profilePassword: string
	profilePasswordConfirm: string
}

export const profileMainSchema = yup.object().shape({
	profileSurname: yup.string().required('Введите фамилию'),
	profileName: yup.string().required('Введите имя'),
	profileBirthday: yup.date().required('Введите дату рождения'),
	profileAvatar: yup.array().min(1, 'Загрузите аватар').required('Загрузите аватар'),
	profileEmail: yup.string().email('Неверный формат e-mail'),
	profilePhone: yup.string().test('is-valid-phone', 'Телефон введен не верно', validatePhoneNumber),
	profileRegion: yup.string().required().notOneOf(['0'], 'Выберите регион'),
	profileCity: yup.string().required('Введите название'),
	profilePassword: yup
		.string()
		.required('Пароль обязателен для заполнения')
		.min(6, 'Пароль должен содержать не менее 6 символов'),
	profilePasswordConfirm: yup
		.string()
		.required('Необходимо ввести пароль еще раз')
		.oneOf([yup.ref('profilePassword')], 'Пароли не совпадают'),
})
