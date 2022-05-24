import './NavBar.css';
import CartWidget from '../cartWidget/cartWidget';

const NavBar = () => {
    return (
        
        <nav className='nav-enlace'>
            <h1>CoderJS</h1>
            
            <div className='botones'>
                <button>Celulares</button>
                <button>Indumentaria</button>
                <button>Electronica</button>
            
            
            </div>
            
            <CartWidget />
            
        </nav>
        
    )
}

export default NavBar