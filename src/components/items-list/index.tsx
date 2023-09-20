import React from 'react'
import { IItem } from '../../types/items.types'
import './index.css'

interface IProps {
	items: IItem[] | null
	setItems: React.Dispatch<React.SetStateAction<IItem[] | null>>
	activeItem: IItem | null
	setActiveItem: React.Dispatch<React.SetStateAction<IItem | null>>
}

export const ItemsList: React.FC<IProps> = ({
	items,
	setItems,
	activeItem,
	setActiveItem,
}) => {
	const deleteHandler = (id: number) => () => {
		items !== null && setItems(items?.filter((el) => el.id !== id))
	}

	const changeHandler = (item: IItem) => () => {
		setActiveItem(item)
	}

	return (
		<>
			{items?.map((el, index) => (
				<ul key={el.label + index} className="items-ul">
					<li
						className={`item-li ${
							activeItem?.label === el.label && 'active-item'
						}`}
						onClick={changeHandler(el)}
					>
						{el.label}
						<button className="delete-button" onClick={deleteHandler(el.id)}>
							Delete
						</button>
						<span className="badge">{el?.comments?.length ?? 0}</span>
					</li>
				</ul>
			))}
		</>
	)
}
