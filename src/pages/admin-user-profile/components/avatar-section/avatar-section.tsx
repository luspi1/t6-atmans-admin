import { AdminSection } from 'src/components/admin-section/admin-section'
import { ReactDropzone } from 'src/components/react-dropzone/react-dropzone'
import { CustomText } from 'src/components/custom-text/custom-text'

export const AvatarSection = () => {
	return (
		<AdminSection contentBg='none' contentPadding='0' contentBorder='none'>
			<CustomText $margin='0 0 4px 0' $fontWeight='600'>
				Аватар *
			</CustomText>
			<CustomText $margin='0 0 12px 0'>соотношение сторон 1:1 или 3:4, JPEG, PNG</CustomText>
			<ReactDropzone
				name='userAvatar'
				prompt='Перетащите изображение на это поле'
				accept={{ 'image/png': ['.png'], 'image/jpeg': ['.jpeg'] }}
			/>
		</AdminSection>
	)
}
