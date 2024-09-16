import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/components/prompt-input/prompt-input'

import { CustomText } from 'src/components/custom-text/custom-text'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const TitleSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Например, ООО НПО ТАУ'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgShortName'
					label='Краткое наименование *'
					placeholder='Наименование организатора'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Полное название, включая расшифровку формы собственности'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgFullName'
					label='Полное наименование *'
					placeholder='Наименование организатора'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Например, "ОРГАНИЗАТОРИЩЕ!!!"'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='orgTrademark'
					label='Торговая марка *'
					placeholder='Коммерческое название или торговая марка'
					margin='0'
				/>
			</PromptInput>
			<PromptInput
				promptContent='Эти данные нужны для того, чтобы событие нормально искалось в списках'
				$margin='0'
			>
				<div>
					<CustomText $margin='0 0 5px 0' $fontWeight='600'>
						Регион и город *
					</CustomText>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='orgRegionList'
							selectOptions={[
								{ label: 'выбрать регион', value: '0' },
								{ label: 'регион 1', value: '1' },
								{ label: 'регион 2', value: '2' },
							]}
							margin='0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='orgLocality'
							placeholder='указать населенный пункт'
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
		</AdminSection>
	)
}
