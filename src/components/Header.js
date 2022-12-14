import './Header.css'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import ButtonLoading from './ButtonLoading'
import logout from '../helpers/logout'

const Header = () => {

  const [userLogged, setUserLogged] = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    const result = await logout(userLogged.idUser, userLogged.token)
    console.log(result)
    if(result?.success) {
      localStorage.removeItem('user-auth')
      setUserLogged({
        isLogged: false,
        idUser: '',
        token: '',
        role: '',
    })
      navigate('/')
    }
  }

  return (
    <header className='Header'>
      <div className='container'>
        <Link to='/'>
          <div className='logotype'>
            <ReactLogo className='icon-logo'/>
            <h1>Tutorial React</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/contact' end>Hooks</NavLink></li>
            <li><NavLink to='/sign-up' end>SignUp</NavLink></li>
            {userLogged.isLogged ? (
              <>
                <li><ButtonLoading onClick={() =>handleLogout()} isLoading={false}>Sair</ButtonLoading></li>
              </>
            ) : (
              <>
                <li><ButtonLoading onClick={() => navigate('/login')} isLoading={false}>Login</ButtonLoading></li>
              </>
            )}
           
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header