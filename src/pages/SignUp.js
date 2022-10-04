import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContainer from "../components/MainContainer"
import { API_PATH } from "../config"
import ButtonLoading from "../components/ButtonLoading"

const SignUp = () => {

  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const createUser = async (user) => {
    const response = await fetch(`${API_PATH}user/sign-up`, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    const result = await response.json()
    if (result?.success) {
      navigate('/')
    }
    setIsLoading(false)
  }

  const handleSubmit = (event) => {
    setIsLoading(true)
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