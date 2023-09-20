import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import './index.css'

export const CommentsList: React.FC = () => {
	const activeItem = useSelector((state: RootState) => state.items.activeItem)

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
