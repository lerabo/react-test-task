import React from 'react'
import { IItem } from '../../types/items.types'
import './index.css'

interface IProps {
	activeItem: IItem | null
}

export const CommentsList: React.FC<IProps> = ({ activeItem }) => {
	return (
		<ul className="items-ul">
			{activeItem?.comments &&
				activeItem?.comments?.length > 0 &&
				activeItem?.comments?.map((el) => (
					<li className="comments-li" key={el.color + el.text}>
						<div
							className="color-block"
							style={{
								backgroundColor: `${el.color !== '' ? el.color : '#000'}`,
							}}
						/>
						<div className="comment-text">{el.text}</div>
					</li>
				))}
		</ul>
	)
}
