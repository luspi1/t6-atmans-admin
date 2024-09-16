import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'

import styled from 'styled-components'

type PromptInputProps = PropsWithChildren<{
	children: ReactNode
	promptContent?: string | ReactNode
	className?: string
	$margin?: string
	$promptPadding?: string
	$template?: string
}>

const StyledPromptInput = styled.div<PromptInputProps>`
	margin: ${({ $margin }) => $margin ?? '0 0 17px 0'};
	grid-template: ${({ $template }) => $template ?? 'auto/minmax(405px, 1.1fr) 0.9fr'};
	display: grid;
	column-gap: 20px;
	@media (max-width: 1024px) {
		grid-template: 1fr 1fr / 1fr;
	}
`
const StyledPromptText = styled.p<PromptInputProps>`
	font-size: 14px;
	font-weight: 300;
	line-height: 1.3;
	color: #2d3231;
	padding: ${({ $promptPadding }) => $promptPadding ?? '25px 0 0 0'};
	@media (max-width: 1024px) {
		padding: 10px 0 0 0;
	}
	a {
		color: #113770;
		font-weight: 600;
	}
`

export const PromptInput: FC<PromptInputProps> = ({
	children,
	promptContent,
	$promptPadding,
	className,
	...props
}) => {
	return (
		<StyledPromptInput className={className} {...props}>
			{children}
			<StyledPromptText $promptPadding={$promptPadding}>{promptContent}</StyledPromptText>
		</StyledPromptInput>
	)
}
