import { type FC, type ReactNode } from 'react'
import { type FileWithPreview } from 'src/types/files'

import { ImagesFormat } from 'src/helpers/consts'
import { convertBytesToKilobytes, defineFileFormat } from 'src/helpers/utils'
import styles from './index.module.scss'

type FilePreviewsProps = {
	files: FileWithPreview[]
	removeBtn?: ReactNode
	removeHandler?: (idx: number) => void
	variant?: 'main' | 'text' | 'sm-img'
}
export const FilePreviews: FC<FilePreviewsProps> = ({
	files,
	removeBtn,
	removeHandler,
	variant = 'main',
}) => {
	if (!files.length) return null

	if (variant === 'text') {
		return (
			<ul className={styles.textFilesList}>
				{files.map((file, idx) => (
					<li key={file.preview}>
						<a href={file.path} download>
							{file.name}
						</a>
						<p>
							{defineFileFormat(file.name)}-файл, {convertBytesToKilobytes(file.size)} Кбайт
						</p>

						{removeBtn && (
							<button
								className={styles.removeTextBtn}
								type='button'
								onClick={() => removeHandler?.(idx)}
							>
								{removeBtn}
							</button>
						)}
					</li>
				))}
			</ul>
		)
	}
	if (variant === 'sm-img') {
		return (
			<ul className={styles.smImgFilesList}>
				{files.map((file) => (
					<li key={file.preview}>
						<div className={styles.smImgWrapper}>
							<img
								src={file.preview}
								alt={file.name}
								onLoad={() => {
									URL.revokeObjectURL(file.preview)
								}}
							/>
						</div>
						<p>{file.name}</p>
					</li>
				))}
			</ul>
		)
	}

	return (
		<ul className={styles.filesList}>
			{files.map((file, idx) => (
				<li key={file.preview}>
					{removeBtn && (
						<button className={styles.removeBtn} type='button' onClick={() => removeHandler?.(idx)}>
							{removeBtn}
						</button>
					)}
					{ImagesFormat.includes(defineFileFormat(file.name)) ? (
						<img
							src={file.preview}
							alt={file.name}
							onLoad={() => {
								URL.revokeObjectURL(file.preview)
							}}
						/>
					) : (
						<div className={styles.textFile}>
							<span></span>
							<a href={file.path} download>
								{file.name}
							</a>
						</div>
					)}
				</li>
			))}
		</ul>
	)
}
