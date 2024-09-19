import React, { type FC, type ReactNode, useEffect, useState } from 'react'
import { type Accept, useDropzone } from 'react-dropzone'
import { type FileWithPreview } from 'src/types/files'

import { useFormContext } from 'react-hook-form'

import { FilePreviews } from 'src/components/file-previews/file-previews'
import { AdminButton } from 'src/UI/AdminButton/AdminButton'

import cn from 'classnames'
import { RemovePhotoSvg } from 'src/UI/icons/removePhotoSVG'
import { RemoveTextFileSvg } from 'src/UI/icons/removeTextFileSVG'
import { ErrorMessage } from '@hookform/error-message'
import { AttachIconSvg } from 'src/UI/icons/attachIconSVG'

import styles from './index.module.scss'

type ReactDropzoneProps = {
	name: string
	accept?: Accept
	multiple?: boolean
	maxFiles?: number
	margin?: string
	prompt?: string
	className?: string
	dzAreaClassName?: string
	label?: string
	removeIcon?: ReactNode
	customUploadBtn?: ReactNode
	uploadBtnText?: string
	variant?: 'main' | 'text'
	previewVariant?: 'main' | 'text' | 'sm-img'
}
export const ReactDropzone: FC<ReactDropzoneProps> = ({
	className,
	dzAreaClassName,
	removeIcon,
	variant = 'main',
	previewVariant,
	name,
	accept,
	multiple = false,
	maxFiles = 1,
	customUploadBtn,
	uploadBtnText = 'Загрузить',
	prompt,
	label,
	margin,
}) => {
	const [currentFiles, setCurrentFiles] = useState<FileWithPreview[]>([])

	const {
		register,
		setValue,
		formState: { errors },
	} = useFormContext()

	const onDrop = (acceptedFiles: File[]) => {
		const newFiles = [...currentFiles, ...acceptedFiles].map((file: File) => {
			return Object.assign(file, {
				preview: URL.createObjectURL(file),
			})
		})

		setCurrentFiles(newFiles)
		setValue(name, newFiles)
	}

	const removeFile = (index: number) => {
		const newFiles = currentFiles.toSpliced(index, 1)
		setCurrentFiles(newFiles)
		setValue(name, newFiles)
	}

	const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
		onDrop,
		accept,
		multiple,
		maxFiles,
	})

	useEffect(() => {
		return () => {
			currentFiles?.forEach((file) => URL.revokeObjectURL(file.preview))
		}
	}, [])

	if (variant === 'text') {
		return (
			<div className={cn(styles.textFileUpload, className)} style={{ margin: margin ?? '' }}>
				{label && <label>{label}</label>}
				<input {...register(name)} {...getInputProps()} />
				<FilePreviews
					variant={previewVariant ?? 'text'}
					files={currentFiles}
					removeBtn={removeIcon ?? <RemoveTextFileSvg />}
					removeHandler={removeFile}
				/>
				{currentFiles.length < maxFiles && (
					<div className={styles.textFileController} onClick={open}>
						{customUploadBtn ?? (
							<AdminButton as='button' type='button' $padding='9.5px 0' $common>
								{uploadBtnText}
							</AdminButton>
						)}
					</div>
				)}
				{errors[name] && (
					<p className={styles.warningMessage}>
						<ErrorMessage errors={errors} name={name} />
					</p>
				)}
			</div>
		)
	}

	return (
		<div className={cn(styles.reactDropzone, className)}>
			{label && <label>{label}</label>}
			<FilePreviews
				variant={previewVariant ?? 'main'}
				files={currentFiles}
				removeBtn={removeIcon ?? <RemovePhotoSvg />}
				removeHandler={removeFile}
			/>
			{currentFiles.length < maxFiles && (
				<div
					className={cn(styles.dropzoneArea, dzAreaClassName, {
						[styles.activeArea]: isDragActive,
					})}
					{...getRootProps()}
				>
					<input {...register(name)} {...getInputProps()} />
					<span>Прикрепить файл</span>
					<p>
						{prompt ?? 'Перетащите файл на это поле'} <AttachIconSvg />
					</p>
				</div>
			)}
			{errors[name] && (
				<p className={styles.warningMessage}>
					<ErrorMessage errors={errors} name={name} />
				</p>
			)}
		</div>
	)
}
