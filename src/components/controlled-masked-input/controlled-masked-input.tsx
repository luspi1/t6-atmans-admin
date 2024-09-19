import React, { type FC } from 'react'
import styled from 'styled-components'
import { IMaskInput } from 'react-imask'
import { type FieldError, useController, useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'

import styles from './index.module.scss'

type StyledIMaskProps = {
	$margin?: string
	$flexDirection?: string
	$gap?: string
	$maxWidth?: string
	$validError?: boolean
}

type MaskInputProps = {
	label?: string
	name: string
	mask?: string
	placeholder?: string
	dynamicError?: FieldError | undefined
}

const StyledIMask = styled.div<StyledIMaskProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? '100%'};

	input {
		outline: 1px solid ${({ $validError }) => ($validError ? '#F00000' : '#AFAFAF')};
		border: none;
		border-radius: 3px;
		padding: 9px 10px;
		&::placeholder {
			color: #868686;
		}
	}
	label {
		display: flex;
		flex-direction: ${({ $flexDirection }) => $flexDirection ?? 'column'};
		gap: ${({ $gap }) => $gap ?? '5px'};
	}

	p:first-child {
		font-size: 14px;
		font-weight: 600;
	}
`

export const ControlledMaskedInput: FC<StyledIMaskProps & MaskInputProps> = ({
	$margin,
	$flexDirection,
	$gap,
	$validError,
	label,
	name,
	mask,
	placeholder,
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
		<StyledIMask
			$margin={$margin}
			$flexDirection={$flexDirection}
			$gap={$gap}
			$validError={!!errors[name]}
		>
			<label>
				{label && <p>{label}</p>}
				<IMaskInput
					{...inputProps}
					{...rest}
					placeholder={placeholder}
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
