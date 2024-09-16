import { type FC } from 'react'
import { type ContactsInputs } from 'src/pages/admin-community-contacts/schema'

import { useFieldArray, useFormContext } from 'react-hook-form'

import { AdminSection } from 'src/components/admin-section/admin-section'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import adminStyles from 'src/routes/admin-layout/index.module.scss'

export const PhoneSection: FC = () => {
	const {
		control,
		formState: { errors },
	} = useFormContext<ContactsInputs>()

	const { fields, append, remove } = useFieldArray({
		control,
		name: 'phoneNumbers',
	})

	return (
		<AdminSection
			titleText='Телефоны'
			sectionName='phonesSection'
			switcherText='Включить блок телефонов'
		>
			<ul className={adminStyles.adminDynamicList}>
				{fields?.map((field, idx) => (
					<li key={field.id}>
						<h4>Телефон {idx + 1}</h4>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`phoneNumbers.${idx}.phoneOwner`}
							dynamicError={errors?.phoneNumbers?.[idx]?.phoneOwner}
							label='Чей номер'
							placeholder='Например, приемная'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`phoneNumbers.${idx}.phoneAddress`}
							dynamicError={errors?.phoneNumbers?.[idx]?.phoneAddress}
							label='Адрес'
							placeholder='Адрес'
							margin='0 0 10px 0'
						/>
						<ControlledInput
							className={adminStyles.adminMainInput}
							name={`phoneNumbers.${idx}.phoneNumber`}
							dynamicError={errors.phoneNumbers?.[idx]?.phoneNumber}
							label='Номер телефона'
							mask='9 (999) 999-99-99'
							placeholder='_ (___) ___-__-__'
							margin='0'
						/>
						{idx !== 0 && (
							<button type='button' onClick={() => remove(idx)}>
								Удалить номер
							</button>
						)}
					</li>
				))}
			</ul>
			<AdminButton
				as='button'
				type='button'
				$common
				$padding='10px 14px'
				onClick={() =>
					append(
						{
							phoneOwner: '',
							phoneAddress: '',
							phoneNumber: '',
						},
						{ shouldFocus: false },
					)
				}
			>
				Добавить еще один номер
			</AdminButton>
		</AdminSection>
	)
}
