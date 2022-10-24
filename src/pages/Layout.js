import Header from "../components/Header"
import "./Contact.css"
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'
import { Outlet } from "react-router-dom"

const Layout = () => {

  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default Layout