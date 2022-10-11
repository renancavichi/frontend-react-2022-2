import './Header.css'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import ButtonLoading from './ButtonLoading'

const Header = () => {

  const [userLogged] = useAuth()
  const navigate = useNavigate()

  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <ReactLogo className='icon-logo'/>
            <h1>React Tutorial - User ID: {userLogged.idUser} </h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/contact' end>Hooks</NavLink></li>
            {userLogged.isLogged ? (
              <>
                <ButtonLoading isLoading={false}>Sair</ButtonLoading>
              </>
            ) : (
              <>
                <li><NavLink to='/sign-up' end>SignUp</NavLink></li>
                <ButtonLoading onClick={() => navigate('/login')} isLoading={false}>Login</ButtonLoading>
              </>
            )}
           
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header