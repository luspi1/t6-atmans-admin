import { Container } from 'src/UI/Container/Container'

import styles from './index.module.scss'

export const AdminFooter = () => {
	return (
		<footer className={styles.adminFooter}>
			<Container className={styles.footerContainer} $width='1870px' $padding='0 15px 0 226px'>
				<div>
					<a href='#'>Правила и условия</a>
					<p>
						<span>© НПО ТАУ 2023</span>
						Авторы и владельцы Сайта не несут ответственности за контент, размещенный пользователями
						Сайта
					</p>
				</div>
				<div>
					<a href='#'>Соглашение об обработке персональных данных</a>
					<a href='#'>Раскрытие информации</a>
				</div>
			</Container>
		</footer>
	)
}
