import './Header.css'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { NavLink, Link } from 'react-router-dom'


const Header = () => {
  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <ReactLogo className='icon-logo'/>
            <h1>React Tutorial</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/contact'>Hooks</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header