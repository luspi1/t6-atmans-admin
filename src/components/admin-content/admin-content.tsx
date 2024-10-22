import { type FC, type ReactNode } from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

type AdminContentProps = {
	children: ReactNode
	className?: string
	title?: string
	link?: string
	$padding?: string
	$height?: string
}

const StyledAdminContent = styled.div<AdminContentProps>`
	background-color: #f5f7fa;
	border-radius: 5px;
	padding: ${({ $padding }) => $padding ?? '30px 20px 60px 30px'};
	min-height: ${({ $height }) => $height ?? '800px'};

	.content-title {
		display: flex;
		gap: 20px;
		align-items: flex-end;
		margin-bottom: 20px;
		@media (max-width: 1024px) {
			flex-direction: column;
			gap: 10px;
			align-items: flex-start;
		}

		h3 {
			font-size: 25px;
			font-weight: 700;
			line-height: 1.2;
		}

		a {
			font-size: 14px;
			font-weight: 600;
			height: 100%;
			position: relative;
			color: #002c47;
			border-bottom: 1px solid #89c2e5;

			&::after {
				content: '';
				position: absolute;
				right: -15px;
				top: 55%;
				width: 9px;
				height: 9px;
				transform: translateY(-50%);
				background: url('data:image/svg+xml,<svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.31247 0.139724L2.71622 8.59303e-05C2.39935 -0.00528476 2.14156 0.241767 2.13082 0.553266C2.12545 0.870136 2.3725 1.12793 2.684 1.13867L6.95369 1.24071L0.165148 8.02925C-0.0550494 8.24945 -0.0550494 8.61465 0.165148 8.83485C0.385346 9.05505 0.750552 9.05505 0.97075 8.83485L7.75929 2.04631L7.86133 6.316C7.8667 6.63287 8.12986 6.87455 8.44673 6.86918C8.60248 6.86381 8.73675 6.80474 8.83879 6.70269C8.94621 6.59528 9.01066 6.4449 9.00528 6.28915L8.87102 0.698274C8.86565 0.392146 8.6186 0.145094 8.31247 0.139724Z" fill="%23002C47"/></svg>')
					no-repeat;
			}
		}
	}
`
export const AdminContent: FC<AdminContentProps> = ({
	children,
	className,
	title,
	link,
	...props
}) => {
	return (
		<StyledAdminContent className={className} {...props}>
			{(title ?? link) && (
				<div className='content-title'>
					<h3>{title}</h3>
					{link && <a href={link}>Посмотреть страницу на сайте</a>}
				</div>
			)}

			{children}
		</StyledAdminContent>
	)
}
