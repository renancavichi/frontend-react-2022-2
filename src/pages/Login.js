import Header from "../components/Header"
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'
import { API_PATH } from "../config"
import useAuth from "../hooks/useAuth"

const Login = () => {

  const [,setUserLogged] = useAuth()

  const login = async (values) => {
    const response = await fetch(`${API_PATH}auth/login`, {
      method: 'POST',
      body: JSON.stringify(values)
    })
    const result = await response.json()
    if(result?.success){
      setUserLogged({
        isLogged: true,
        idUser: result.data.idUser,
        token: result.data.token,
        role: result.data.role,
      })
    } else {
      alert(result?.error?.message || 'Erro no servidor')
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { email, pass } = event.target
    login({ email: email.value, pass: pass.value })
  }


  return (
    <>
      <Header />
      <MainContainer>
        <h1>Login</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <p>Email: <input type="text" name="email" /></p>
          <p>Pass: <input type="text" name="pass" /></p>
          <button type="submit">Send</button>
        </form>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Login