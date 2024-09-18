import React, { type FC, type PropsWithChildren, type ReactNode } from 'react'

import styled from 'styled-components'
import { AdminPromptIconSvg } from 'src/UI/icons/adminPromptIconSVG'

type PromptInputWrapperProps = PropsWithChildren<{
	children: ReactNode
	className?: string
	$margin?: string
	$template?: string
}>

type PromptInputBtnProps = {
	promptContent: string
}

const StyledPromptInput = styled.div<PromptInputWrapperProps>`
	margin: ${({ $margin }) => $margin ?? '0 0 17px 0'};
	grid-template: ${({ $template }) => $template ?? 'auto/minmax(405px, 1.1fr) 0.9fr'};
	display: grid;
	column-gap: 20px;
	@media (max-width: 1024px) {
		grid-template: 1fr 1fr / 1fr;
	}
	button {
		margin-top: 30px;
		width: 17px;
		height: 17px;
	}
`

export const PromptInput: FC<PromptInputWrapperProps & PromptInputBtnProps> = ({
	children,
	promptContent,
	className,
	...props
}) => {
	return (
		<StyledPromptInput className={className} {...props}>
			{children}
			<button title={promptContent}>
				<AdminPromptIconSvg />
			</button>
		</StyledPromptInput>
	)
}
