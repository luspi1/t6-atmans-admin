import { type FC, type ReactNode } from 'react'

import styled from 'styled-components'

type AdminContentProps = {
	children: ReactNode
	className?: string
	$padding?: string
	$height?: string
}

const StyledAdminContent = styled.div<AdminContentProps>`
	background-color: #fff;
	border-radius: 5px;
	padding: ${({ $padding }) => $padding ?? '20px 20px 20px 20px'};
	min-height: ${({ $height }) => $height ?? '1100px'};
`
export const AdminContent: FC<AdminContentProps> = ({ children, className, ...props }) => {
	return (
		<StyledAdminContent className={className} {...props}>
			{children}
		</StyledAdminContent>
	)
}
