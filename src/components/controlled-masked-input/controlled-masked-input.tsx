import React, { type FC } from 'react'
import styled from 'styled-components'
import { IMaskInput } from 'react-imask'
import { Controller, type FieldError, useController, useFormContext } from 'react-hook-form'
import styles from 'src/components/controlled-date-input/index.module.scss'
import { ErrorMessage } from '@hookform/error-message'

type StyledIMaskProps = {
	$margin?: string
	$flexDirection?: string
	$gap?: string
}

type MaskInputProps = {
	label?: string
	name: string
	mask?: string
	dynamicError?: FieldError | undefined
}

const StyledIMask = styled.div<StyledIMaskProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	label {
		display: flex;
		flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'column'};
		gap: ${({ $gap }) => $gap ?? '5px'};
	}
	p {
		font-size: 14px;
	}
`

export const ControlledMaskedInput: FC<StyledIMaskProps & MaskInputProps> = ({
	$margin,
	$flexDirection,
	$gap,
	label,
	name,
	mask,
	dynamicError,
	...rest
}) => {
	const {
		control,
		formState: { errors },
	} = useFormContext()
	const {
		field: { ref, onChange, ...inputProps },
	} = useController({
		name,
		control,
	})

	// Функция для очистки значения инпута, если введены только символы маски
	const handleAccept = (value: string) => {
		const cleanedValue = value.replace(/\D/g, '')

		if (cleanedValue === '') {
			onChange('')
		} else {
			onChange(value)
		}
	}

	return (
		<StyledIMask $margin={$margin} $flexDirection={$flexDirection} $gap={$gap}>
			<label>
				{label && <p>{label}</p>}
				<IMaskInput
					{...inputProps}
					{...rest}
					onAccept={handleAccept}
					unmask={false}
					mask={mask ?? ''}
				/>
			</label>
			{dynamicError && <p className={styles.warningMessage}>{dynamicError.message}</p>}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</StyledIMask>
	)
}
