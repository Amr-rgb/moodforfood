import { useState } from "react"
import Order from "./Order"

const Filter = () => {
    const [filterTitle, setTitle] = useState(undefined)
    const filterTitles = [{ name: 'all', id: 0 }, { name: 'pizza', id: 1 }, { name: 'biryani', id: 2 }, { name: 'burger', id: 3 }, { name: 'dosa', id: 4 }, { name: 'idly', id: 5 }]

    const changeHandler = (e) => {
        document.querySelectorAll('.filter-container button').forEach(item => {
            item.classList.remove('current')
        })
        e.target.classList.add('current')

        const idx = e.target.classList[0]
        if (idx === 0) {
            return
        } else {
            setTitle(filterTitles[idx].name)
        }
    }


    return (
        <>
            <p>Choose From :</p>
            <div className='filter-container container'>
                {filterTitles.map(title => (
                    <button onClick={changeHandler} className={title.id === 0 ? `${title.id} current` : title.id} key={title.id}>{title.name}</button>
                ))}
            </div>

            <Order title={filterTitle} />
        </>
    )
}

export default Filter