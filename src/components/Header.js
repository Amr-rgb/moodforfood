import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="navbar">
            <div className="container">
                <ul>
                    <li className='logo'><Link to="/">Mood<span>for</span><span>Food</span></Link></li>
                    <li className='cta'><Link to="/random">Let Us Choose For You</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header