import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
    <Header />
    <MainContainer>
        <h1>Page not Found!</h1>
        <Link to='/'>Back to Home</Link>
    </MainContainer>
    <Footer />
</>
  )
}

export default NotFound