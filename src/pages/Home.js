import {Link} from 'react-router-dom'
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Home.css"
import MainContainer from '../components/MainContainer'

const Home = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Home</h1>
        <p>Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework[8] mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.[9]</p>
        <Link to='/contact'>Contact</Link>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Home