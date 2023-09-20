import React from 'react'
import { CommentsList, ItemInput, ColorInput, ItemsList } from './components'
import { IItem } from './types/items.types'
import './App.css'

function App() {
	const [items, setItems] = React.useState<IItem[] | null>([
		{ label: 'test', id: Math.floor(Math.random() * 100000000) },
	])
	const [activeItem, setActiveItem] = React.useState<IItem | null>(
		items ? items[0] : null
	)

	React.useEffect(() => {
		if (items?.findIndex((el) => el.id === activeItem?.id) === -1) {
			setActiveItem(items[0])
		}
		const updatedItem = items?.find((el) => el.id === activeItem?.id)
		updatedItem && setActiveItem(updatedItem)
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
						<ItemInput items={items} setItems={setItems} />
						<ItemsList
							items={items}
							setItems={setItems}
							activeItem={activeItem}
							setActiveItem={setActiveItem}
						/>
					</div>
					<div className="item-block">
						<h1 className="items-title">Comments #{activeItem?.id}</h1>
						<CommentsList activeItem={activeItem} />
						<ColorInput
							items={items}
							setItems={setItems}
							activeItem={activeItem}
						/>
					</div>
				</main>
			</div>
		</div>
	)
}

export default App
