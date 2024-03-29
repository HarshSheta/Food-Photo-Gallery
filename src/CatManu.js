import React from 'react'

const CatManu = ({ filterItem, catItems }) => {
    return (
        <>
            <div className="menu-tebs container">
                <div className="manu-tab d-flex justify-content-around">
                    {catItems.map((curElem, index) => {
                        return <button className='btn btn-warning' key={index} onClick={() => filterItem(curElem)}>
                            {curElem}
                        </button>
                    })}

                    {/* <button className='btn btn-warning' onClick={() => filterItem('breakfast')}>Breakfast</button>
                    <button className='btn btn-warning' onClick={() => filterItem('lunch')}>Lunch</button>
                    <button className='btn btn-warning' onClick={() => filterItem('evening')}>Evening</button>
                    <button className='btn btn-warning' onClick={() => filterItem('dinner')}>Dinner</button>
                    <button className='btn btn-warning' onClick={() => setItems(Menu)}>All</button> */}
                </div>
            </div>
        </>
    )
}

export default CatManu