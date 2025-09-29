import './Header.css';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='header'>
            {/* Logo */}
            <div className='logo'>
                <Link to="/">
                    <span className='logo-1'>G</span>
                    <span className='logo-1'>B</span>
                    <span className='logo-1'>Z</span>
                </Link>                         
            </div>

            {/* Navegação */}
            <div className='search-bar'>
                <input type = "text" placeholder='Digite sua busca...' />
                <div className='location'>
                    <button className='search-btn'>
                        <ion-icon name="search-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </header>
    )
}