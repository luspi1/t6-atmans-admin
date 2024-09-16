import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { ControlledDateInput } from 'src/components/controlled-date-input/controlled-date-input'
import { ControlledCheckbox } from 'src/components/controlled-checkbox/controlled-checkbox'
import { PromptInput } from 'src/components/prompt-input/prompt-input'
import { GridRow } from 'src/components/grid-row/grid-row'

import adminStyles from 'src/routes/admin-layout/index.module.scss'
import { CustomText } from 'src/components/custom-text/custom-text'

export const TitleSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<PromptInput
				promptContent={
					<>
						Как в паспорте.
						<br />
						На некоторых событиях применяется паспортный контроль.
					</>
				}
			>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userSurname'
					label='Фамилия *'
					margin='0'
				/>
			</PromptInput>
			<PromptInput
				promptContent={
					<>
						Как в паспорте.
						<br />
						На некоторых событиях применяется паспортный контроль.
					</>
				}
			>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userName'
					label='Имя *'
					margin='0'
				/>
			</PromptInput>
			<PromptInput
				promptContent={
					<>
						Как в паспорте.
						<br />
						На некоторых событиях применяется паспортный контроль.
					</>
				}
			>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userPatronymic'
					label='Отчество'
					margin='0'
				/>
			</PromptInput>
			<PromptInput promptContent='Если в Вашем случае использование позывного (прозвища, никнейма) оправдано.'>
				<ControlledInput
					className={adminStyles.adminMainInput}
					name='userAlias'
					label='Прозвище / позывной'
					margin='0'
				/>
			</PromptInput>
			<div>
				<CustomText $margin='0 0 5px 0' $fontWeight='600'>
					Дата рождения *
				</CustomText>
				<GridRow $template='auto/204px 320px' $margin='0 0 0 0' $alignItems='center'>
					<ControlledDateInput
						className={adminStyles.adminDateInput}
						name='userBirthday'
						dateFormat='dd.MM.yyyy'
						placeholder='дд.мм.гггг'
						margin='0'
					/>
					<ControlledCheckbox
						className={adminStyles.adminCheckbox}
						name='userIsHideBirthday'
						label='Скрыть мой возраст из публичного доступа'
						margin='0'
						type='checkbox'
					/>
				</GridRow>
			</div>
		</AdminSection>
	)
}
