import React from 'react'
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../store'
import { setItems } from '../../store/slices'
import './index.css'

export const ItemInput: React.FC = () => {
  const items = useSelector((state: RootState) => state.items.items)
  const dispatch: AppDispatch = useDispatch()

  const onSubmit = ({ item }: { item: string }) => {
    const randomNumber = Math.floor(Math.random() * 100000000)

    dispatch(
      setItems(
        items !== null
          ? [...items, { label: item, id: randomNumber }]
          : [{ label: item, id: randomNumber }]
      )
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
