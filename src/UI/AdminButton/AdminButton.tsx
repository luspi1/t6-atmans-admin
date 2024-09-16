import React from 'react'
import { type FC } from 'react'
import { Link, type LinkProps } from 'react-router-dom'
import styled from 'styled-components'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

type AdminButtonProps = {
	$outlined?: boolean
	$danger?: boolean
	$common?: boolean
	$icon?: boolean
	$margin?: string
	$padding?: string
	$maxWidth?: string
	as: 'link' | 'button'
}

const AdminButtonStyled = styled.button<AdminButtonProps>`
	padding: ${({ $padding }) => $padding ?? '9.5px 56px'};
	margin: ${({ $margin }) => $margin ?? '0'};
	max-width: ${({ $maxWidth }) => $maxWidth ?? 'auto'};
	display: inline-block;
	line-height: 1;
	border-radius: 3px;
	font-size: 14px;
	cursor: pointer;
	font-family: 'Open Sans', sans-serif;
	font-weight: 600;
	background-color: #113770;
	color: #ffffff;
	border: 1px solid transparent;

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
    color: #113770;
    border: 1px solid #113770;
  `}

	${({ $danger }) =>
		$danger &&
		`
    background-color: #ffffff;
    color: #FF0000;
    border: 1px solid #FF0000;
  `}

	${({ $common }) =>
		$common &&
		`
    background-color: transparent;
    color: #000000;
    border: 1px solid #868585;
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
