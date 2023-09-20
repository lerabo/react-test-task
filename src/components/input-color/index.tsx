import React from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setItems } from '../../store/slices'
import './index.css'

export const ColorInput: React.FC = () => {
	const items = useSelector((state: RootState) => state.items.items)
	const activeItem = useSelector((state: RootState) => state.items.activeItem)
	const dispatch: AppDispatch = useDispatch()

	const onSubmit = (values: { color: string; text: string }) => {
		const updatedItems =
			items !== null
				? items.map((item) => {
						if (item.id === activeItem?.id) {
							return {
								...item,
								comments:
									item?.comments && item?.comments?.length > 0
										? [...item!.comments!, values]
										: [values],
							}
						}
						return item
				  })
				: items

		dispatch(setItems(updatedItems))
	}

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ color: '', text: '' }}
			render={({ handleSubmit, form }) => (
				<form
					onSubmit={async (event) => {
						await handleSubmit(event)
						form.reset()
					}}
				>
					<div className="display-flex">
						<Field
							name="color"
							component="input"
							className="input-color"
							type="color"
							required
							defaultValue={'#000000'}
						/>
						<Field
							name="text"
							component="textarea"
							type="text"
							className="textarea"
							placeholder="Type comment here..."
							required
						/>
						<button className="button" type="submit">
							Add New
						</button>
					</div>
				</form>
			)}
		/>
	)
}
