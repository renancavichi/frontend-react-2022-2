import Header from "../components/Header"
import Footer from "../components/Footer"
import MainContainer from "../components/MainContainer"

const SignUp = () => {

    const createUser = async (user) => {
        const formUser = new FormData()
        formUser.append("name", user.name)
        formUser.append("email", user.email)
        formUser.append("pass", user.pass)
        formUser.append("avatar", user.avatar)
        const response = await fetch('http://localhost/pj3/api-php-ifsp-2022-2/user/sign-up', {
            method: 'POST',
            body: formUser
        })
        const result = await response.json()
        console.log(result.success.message)
        console.log(result.user)
    }
  
  
  const handleSubmit = (event) => {
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
                <p>Name: <input type="text" name="name"/></p>
                <p>Email: <input type="text" name="email"/></p>
                <p>Pass: <input type="password" name="pass"/></p>
                <p>Avatar: <input type="text" name="avatar"/></p>
                <input type="submit" value="Send" />
            </form>
        </MainContainer>
        <Footer />
    </>
  )
}

export default SignUp