import { type FC, type ReactNode } from 'react'

import styled from 'styled-components'

type AdminSectionContentProps = {
	children: ReactNode
	className?: string
	$padding?: string
	$maxWidth?: string
	$background?: string
	$border?: string
}

const StyledAdminSectionContent = styled.div<AdminSectionContentProps>`
	background: ${({ $background }) => $background ?? '#f4f7fa'};
	border: ${({ $border }) => $border ?? '1px dashed #98a5a3'};
	border-radius: 5px;
	padding: ${({ $padding }) => $padding ?? '20px 24px 20px 24px'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? '100%'};
`
export const AdminSectionContent: FC<AdminSectionContentProps> = ({
	children,
	className,
	...props
}) => {
	return (
		<StyledAdminSectionContent className={className} {...props}>
			{children}
		</StyledAdminSectionContent>
	)
}
