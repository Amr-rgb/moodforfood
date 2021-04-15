import { useEffect, useState } from "react"

const Random = () => {
    const [mailNum, setNum] = useState([])
    const [userInput, setInput] = useState(1)

    const changeHandler = (e) => {
        const {value} = e.target
        if(value > 0) {
            setInput(value)
        }
    }

    const clickHandler = () => {
        const array = []
        for(let i = 0; i < userInput; i++) {
            array.push(i)
        }

        setNum(array)
    }

    useEffect(() => {
        if(mailNum.length === 0) {
            return
        } else {
            const mailDivs = document.querySelectorAll('.random .mail')

            mailDivs.forEach(div => {
                fetch('https://foodish-api.herokuapp.com/api/')
                    .then(res => res.json())
                    .then(data => {
                        div.style.backgroundImage = 'url(' + data.image + ')'
                        div.style.border = '1px solid #FF005F'
                    })
            })
        }

    }, [mailNum])

    return (

        <div className="random container">

            <div className="user-choose">
                <label>Mails</label>
                <div className='user-input'>
                    <input type="number" value={userInput} onChange={changeHandler}/>
                    <button onClick={clickHandler}>Get it</button>
                </div>
            </div>

            <div className="mails-container">
                {mailNum.map(mail => (
                    <div
                        key={mail}
                        className='mail'
                        style={{border: '1px solid #FF005F'}}
                    >
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Random