import * as yup from 'yup'
import { type FileWithPreview } from 'src/types/files'

type ImportantBlockLinks = {
	textLink: string
	urlAddress: string
}

export type CommunityInputs = {
	aboutTitleImage?: FileWithPreview[]
	importantLinks?: ImportantBlockLinks[]
	linksSection?: boolean
	nameBlockLinks?: string
	epigraphText: string
	epigraphSign: string
	gallerySection?: boolean
	galleryImages?: FileWithPreview[]
	articleSection?: boolean
	articleName?: string
	articleText?: string
	docSection?: boolean
	docFiles?: FileWithPreview[]
}

export const communitySchema = yup.object().shape({
	epigraphText: yup.string().required('Введите текст'),
	epigraphSign: yup.string().required('Введите подпись'),
	linksSection: yup.boolean(),
	nameBlockLinks: yup.string().when('linksSection', ([linksSection]) => {
		return linksSection
			? yup.string().required('Введите название блока')
			: yup.string().notRequired()
	}),

	importantLinks: yup.array().when('linksSection', ([linksSection]) => {
		return linksSection
			? yup.array().of(
					yup.object().shape({
						textLink: yup.string().required('Введите текст ссылки'),
						urlAddress: yup.string().required('Введите URL'),
					}),
				)
			: yup.array().notRequired()
	}),
	gallerySection: yup.boolean(),
	articleSection: yup.boolean(),
	articleName: yup.string().when('articleSection', ([articleSection]) => {
		return articleSection
			? yup.string().required('Введите название статьи')
			: yup.string().notRequired()
	}),
	articleText: yup.string().when('articleSection', ([articleSection]) => {
		return articleSection
			? yup.string().required('Введите название статьи')
			: yup.string().notRequired()
	}),
	docSection: yup.boolean(),
})
