import './Header.css'
import { FaReact as ReactLogo } from 'react-icons/fa'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import ButtonLoading from './ButtonLoading'
import useAuth from '../hooks/useAuth'
import logout from '../helpers/logout'

const HeaderAdmin = () => {

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
        <Link to='/admin'>
          <div className='logotype'>
            <ReactLogo className='icon-logo'/>
            <h1>Área Admninistrativa</h1>
          </div>
        </Link>
        <nav>
          <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><ButtonLoading onClick={()=>{handleLogout()}} isLoading={false}>Sair</ButtonLoading></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default HeaderAdmin