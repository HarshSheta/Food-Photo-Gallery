import React, { useState } from 'react'
import Menu from './menu'
import Menuitems from './Menuitems'
import CatManu from './CatManu'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const allCatValues = [...new Set(Menu.map((curElem) => curElem.category)), "all"]
console.log(allCatValues);

const GallaryReact = () => {
    const [items, setItems] = useState(Menu)
    const [catItems, setCatItems] = useState(allCatValues)

    const filterItem = (categItem) => {
        if (categItem === "all") {
            setItems(Menu)
            return
        }
        const updatedItem = Menu.filter((curElem) => {
            return curElem.category === categItem
        })
        setItems(updatedItem)
    }
    return (
        <>
            <h1 className="mt-3 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            {/* Menu list button */}
            <CatManu filterItem={filterItem} catItems={catItems} />
            {/* My Main Items Section */}
            <Menuitems items={items} />
        </>
    )
}

export default GallaryReact