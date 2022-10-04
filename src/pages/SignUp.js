import { useState } from "react"
import { Link } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContainer from "../components/MainContainer"
import { API_PATH } from "../config"
import ButtonLoading from "../components/ButtonLoading"
import Alert from "../components/Alert"

const SignUp = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState({hasError: false,
  message: "Erro no servidor! Por favor, tente novamente!"})
  const [success, setSuccess] = useState(false)

  const createUser = async (user) => {
    const response = await fetch(`${API_PATH}user/sign-up`, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    const result = await response.json()
    if (result?.success) {
      setSuccess(true)
    } else if(result?.error){
      if(result?.error?.message){
        setError({
          hasError: true,
          message: result.error.message 
        })
      } else{
        setError({...error, hasError: true})
      }
    }
    setIsLoading(false)
  }

  const handleSubmit = (event) => {
    setIsLoading(true)
    setSuccess(false)
    setError({
      hasError: false,
      message: "Erro no servidor! Por favor, tente novamente!"
    })
    event.preventDefault()
    const { name, email, pass, avatar } = event.target
    createUser({
      name: name.value,
      email: email.value,
      pass: pass.value,
      avatar: avatar.value
    })
  }

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Sign Up</h1>
        <Alert type="error" opened={error.hasError}>{error.message}</Alert>
        <Alert type="success" opened={success}>Usuário Cadastrado com sucesso!</Alert>
        {success && <Link to='/'>Ver Lista</Link>}
        <form onSubmit={(event) => handleSubmit(event)}>
          <p>Name: <input type="text" name="name" /></p>
          <p>Email: <input type="text" name="email" /></p>
          <p>Pass: <input type="password" name="pass" /></p>
          <p>Avatar: <input type="text" name="avatar" /></p>
          <ButtonLoading type="submit" isLoading={isLoading}>Send</ButtonLoading>
        </form>
      </MainContainer>
      <Footer />
    </>
  )
}

export default SignUp