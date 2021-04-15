import { useEffect, useState } from 'react'

const Order = (title) => {
    const [orders, setOrders] = useState([0])

    let url = 'https://foodish-api.herokuapp.com/api/'
    const clickHandler = (e) => {
        e.target.style.display = 'none'

        setOrders(prev => {
            const next = prev[prev.length - 1] + 1
            return [...prev, next]
        })


    }

    useEffect(() => {
        if (orders.length === 1) {
            return
        } else if (title.title !== undefined) {
            fetch(`https://foodish-api.herokuapp.com/api/${title.title !== 'all' ? `images/${title.title}/` : ''}`)
                .then(res => res.json())
                .then(data => {
                    const orderDivs = document.querySelectorAll('.orders div')
                    const lastOrder = orderDivs[orderDivs.length - 2]

                    lastOrder.style.backgroundImage = 'url(' + data.image + ')'
                    lastOrder.style.border = '1px solid #FF005F'
                })

        } else {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    const orderDivs = document.querySelectorAll('.orders div')
                    const lastOrder = orderDivs[orderDivs.length - 2]

                    lastOrder.style.backgroundImage = 'url(' + data.image + ')'
                    lastOrder.style.border = '1px solid #FF005F'
                })
        }
    }, [orders])

    return (
        <div className="orders container">
            {orders.map(order => (
                <div
                    key={order}
                    style={{ border: '1px dashed #B8B8B8' }}
                >
                    <button onClick={clickHandler}>click</button>
                </div>
            ))}
        </div>
    )
}

export default Order