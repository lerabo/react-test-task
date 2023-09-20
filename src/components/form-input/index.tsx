import React from 'react'
import { Field, Form } from 'react-final-form'
import { IItem } from '../../types/items.types'
import './index.css'

interface IProps {
	items: IItem[] | null
	setItems: React.Dispatch<React.SetStateAction<IItem[] | null>>
}

export const ItemInput: React.FC<IProps> = ({ setItems }) => {
	const onSubmit = ({ item }: { item: string }) => {
		const randomNumber = Math.floor(Math.random() * 100000000)

		setItems((prev) =>
			prev !== null
				? [...prev, { label: item, id: randomNumber }]
				: [{ label: item, id: randomNumber }]
		)
	}

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={{ item: '' }}
			render={({ handleSubmit, form }) => (
				<form
					onSubmit={async (event) => {
						await handleSubmit(event)
						form.reset()
					}}
				>
					<div className="display-flex">
						<Field
							name="item"
							component="input"
							type="text"
							placeholder="Type text here..."
							className="input"
							required
						/>
						<button className="add-item-button" type="submit">
							Add New
						</button>
					</div>
				</form>
			)}
		/>
	)
}
