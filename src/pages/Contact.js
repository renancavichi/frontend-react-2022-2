import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Contact.css"
import MainContainer from '../components/MainContainer'

const Contact = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <h1>Contact</h1>

        <p>Aqui é o contact</p>
        <Link to='/'>Home</Link>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Contact