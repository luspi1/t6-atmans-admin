import { type FC } from 'react'

import { BottomArrowSvg } from 'src/UI/icons/bottomArrowSVG'

import adminAvatar from 'src/assets/img/admin-avatar.png'

import styles from './index.module.scss'

export const AdminPersonal: FC = () => {
	// const { data: userData } = useGetUserByIdQuery('0')
	// if (!userData) return <button className={styles.authBtn}>Войти</button>
	return (
		<div className={styles.adminPersonal}>
			<a className={styles.adminName} href='#'>
				Светлана
			</a>
			<img className={styles.adminAvatar} src={adminAvatar} alt='avatar' />
			<BottomArrowSvg />
		</div>
	)
}
