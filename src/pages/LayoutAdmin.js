import HeaderAdmin from "../components/HeaderAdmin"
import "./Contact.css"
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'
import { Outlet, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import useAuth from "../hooks/useAuth"

const LayoutAdmin = () => {

  const [userLogged] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(!userLogged.isLogged || !userLogged.role.includes('admin')){
      navigate('/login')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <HeaderAdmin />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  )
}

export default LayoutAdmin