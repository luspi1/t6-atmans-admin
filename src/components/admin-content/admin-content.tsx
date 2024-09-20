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
	padding: ${({ $padding }) => $padding ?? '30px 20px 60px 30px'};
	min-height: ${({ $height }) => $height ?? '1100px'};
	h3 {
		font-size: 25px;
		font-weight: 700;
		margin-bottom: 21px;
	}
`
export const AdminContent: FC<AdminContentProps> = ({ children, className, ...props }) => {
	return (
		<StyledAdminContent className={className} {...props}>
			{children}
		</StyledAdminContent>
	)
}
