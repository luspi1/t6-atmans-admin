import { FormProvider, type SubmitHandler, useForm } from 'react-hook-form'
import { type ReqFiltrationInputs } from 'src/pages/profile-layout/pages/admin-profile-event-requests/components/eventReqFiltration/schema'

import styles from './index.module.scss'
import { ControlledInput } from 'src/components/controlled-input/controlled-input'
import { useEffect, useCallback } from 'react'

export const EventReqFiltration = () => {
	const methods = useForm()

	const onSubmit: SubmitHandler<ReqFiltrationInputs> = useCallback((data) => {
		console.log(data)
	}, [])

	const watchedFields = methods.watch()

	useEffect(() => {
		if (Object.keys(watchedFields).length) {
			methods.handleSubmit(onSubmit)
		}
	}, [watchedFields, methods.handleSubmit, onSubmit])

	return (
		<FormProvider {...methods}>
			<form
				className={styles.filterForm}
				onSubmit={methods.handleSubmit(onSubmit)}
				noValidate
				autoComplete='off'
			>
				<ControlledInput name='reqTitle' placeholder='искать по наименованию события' margin='0' />
			</form>
		</FormProvider>
	)
}
