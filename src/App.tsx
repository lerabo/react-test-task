import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommentsList, ItemInput, ColorInput, ItemsList } from './components'
import { AppDispatch, RootState } from './store'
import { setActiveItem } from './store/slices'
import './App.css'

function App() {
  const items = useSelector((state: RootState) => state.items.items)
  const activeItem = useSelector((state: RootState) => state.items.activeItem)
  const dispatch: AppDispatch = useDispatch()

  React.useEffect(() => {
    if (items?.findIndex((el) => el.id === activeItem?.id) === -1) {
      dispatch(setActiveItem(items[0]))
    }
    const updatedItem = items?.find((el) => el.id === activeItem?.id)
    updatedItem && dispatch(setActiveItem(updatedItem))
  }, [items, activeItem])

  return (
    <div className="app">
      <div className="flex-row">
        <aside className="app-aside">
          <h2 className="aside-h2">DAIRY APP</h2>
          <div className="aside-div">Comment with no sense</div>
        </aside>
        <main className="main-container">
          <div className="item-block">
            <h1 className="items-title">Items</h1>
            <ItemInput />
            <ItemsList />
          </div>
          <div className="item-block">
            <h1 className="items-title">Comments #{activeItem?.id}</h1>
            <CommentsList />
            <ColorInput />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
