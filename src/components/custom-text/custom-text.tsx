import React, { type FC } from 'react'

import styled from 'styled-components'

type CustomTextProps = {
	children: string
	className?: string
	$margin?: string
	$padding?: string
	$fontSize?: string
	$fontWeight?: string
} & React.CSSProperties

const StyledCustomText = styled.p<CustomTextProps>`
	margin: ${({ $margin }) => $margin ?? '0'};
	padding: ${({ $padding }) => $padding ?? '0'};
	font-size: ${({ $fontSize }) => $fontSize ?? '14px'};
	font-weight: ${({ $fontWeight }) => $fontWeight ?? '400'};
`

export const CustomText: FC<CustomTextProps> = ({ children, className, ...props }) => {
	return (
		<StyledCustomText className={className} {...props}>
			{children}
		</StyledCustomText>
	)
}
