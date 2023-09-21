import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setActiveItem, setItems } from '../../store/slices'
import { IItem } from '../../types/items.types'
import './index.css'

export const ItemsList: React.FC = () => {
  const items = useSelector((state: RootState) => state.items.items)
  const activeItem = useSelector((state: RootState) => state.items.activeItem)
  const dispatch: AppDispatch = useDispatch()

  const deleteHandler = (id: number) => () => {
    items !== null && dispatch(setItems(items?.filter((el) => el.id !== id)))
  }

  const changeHandler = (item: IItem) => () => {
    dispatch(setActiveItem(item))
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
