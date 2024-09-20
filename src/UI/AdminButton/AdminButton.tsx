import React from 'react'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AdminButtonProps = {
	$outlined?: boolean
	$cancel?: boolean
	$common?: boolean
	$icon?: boolean
	$margin?: string
	$padding?: string
	$maxWidth?: string
	as: 'link' | 'button'
}

const AdminButtonStyled = styled.button<AdminButtonProps>`
	padding: ${({ $padding }) => $padding ?? '12px 20px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? 'initial'};
	display: flex;
	align-items: center;
	justify-content: center;
	line-height: 1;
	border-radius: 3px;
	font-size: 14px;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	background-color: #184f71;
	color: #ffffff;
	border: none;

	${({ $icon }) =>
		$icon &&
		`
		display: flex;
		align-items: center;
		gap: 8px;
		width: max-content;
  `}
	${({ $outlined }) =>
		$outlined &&
		`
    background-color: #ffffff;
    color: #002C47;
    box-shadow: 0 0 5px 0 rgba(1, 61, 86, 0.2);
  `}

	${({ $cancel }) =>
		$cancel &&
		`
    background: #ffffff url('data:image/svg+xml,<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="6" fill="%23D9001B"/><rect width="8.12592" height="0.325037" transform="matrix(0.706782 -0.707431 0.706782 0.707431 3.02344 8.76758)" fill="white" stroke="white" stroke-linejoin="round"/><rect width="8.12592" height="0.325037" transform="matrix(-0.706782 -0.707431 0.706782 -0.707431 8.74219 8.97852)" fill="white" stroke="white" stroke-linejoin="round"/></svg>') no-repeat;
    background-position: 20px 50%;
   	padding: 12px 20px 12px 40px;
    color: #D9001B;
    box-shadow: 0 0 5px 0 rgba(1, 61, 86, 0.2);
  `}

	${({ $common }) =>
		$common &&
		`
    background-color: transparent;
    color: #000000;
    font-weight: 400;
  `}
`

export const AdminButton: FC<AdminButtonProps & (ButtonProps | LinkProps)> = ({
	children,
	as,
	...props
}) => {
	if (as === 'link') {
		return (
			<AdminButtonStyled as={Link} {...(props as LinkProps)}>
				{children}
			</AdminButtonStyled>
		)
	}

	return <AdminButtonStyled {...(props as ButtonProps)}>{children}</AdminButtonStyled>
}
