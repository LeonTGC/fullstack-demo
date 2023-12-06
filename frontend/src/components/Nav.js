import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <header>
                <Link to='/'>
                    home
                </Link>
                <Link to='/about'>
                    about
                </Link>
            </header>
        </div>
    )
}

export default Nav