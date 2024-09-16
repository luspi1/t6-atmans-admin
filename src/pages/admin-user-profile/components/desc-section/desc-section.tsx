import cnBind from 'classnames/bind'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'

import { PromptInput } from 'src/components/prompt-input/prompt-input'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'
import { GridRow } from 'src/components/grid-row/grid-row'
import { ControlledSelect } from 'src/components/controlled-select/controlled-select'

export const DescSection = () => {
	const cx = cnBind.bind(adminStyles)

	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput promptContent='Эти данные нужны для того, чтобы событие нормально искалось в списках'>
				<div>
					<CustomText $margin='0 0 5px 0' $fontWeight='600'>
						Регион и город *
					</CustomText>
					<GridRow>
						<ControlledSelect
							className={adminStyles.adminSelect}
							name='userRegionList'
							selectOptions={[
								{ label: 'выбрать регион', value: '0' },
								{ label: 'регион 1', value: '1' },
								{ label: 'регион 2', value: '2' },
							]}
							margin='0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name='userLocality'
							placeholder='Название населенного пункта'
							margin='0'
						/>
					</GridRow>
				</div>
			</PromptInput>
			<PromptInput promptContent='Пожалуйста, не используйте ненормативную лексику.' $margin='0'>
				<ControlledInput
					className={cx(adminStyles.adminMainInput, '_sm-textarea')}
					name='userDesc'
					label='Несколько слов о себе'
					placeholder='Начните писать текст...'
					margin='0'
					isTextarea
				/>
			</PromptInput>
		</AdminSection>
	)
}
