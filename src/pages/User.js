import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"

const User = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState({})

  const requestUserById = async (id) => {
const response = await fetch(`http://localhost/pj3/api-php-ifsp-2022-2/user/by-id?id=${id}`)
    const result = await response.json()
    console.log(result?.success?.message)
    if(result?.error){
        navigate('/not-found')
    }
    setUser(result.data)
  }

  useEffect(() => {
    requestUserById(id)
  },[])

  return (
    <>
        <Header />
        <MainContainer>
            {
                user?.name ? 
                <>
                    <h1>{user.name}</h1>
                    <img src={user.avatar} alt={user.name} />
                    <p>Email: {user.email}</p>
                </> 
                : <p>Loading user...</p>
            }
        </MainContainer>
        <Footer />
    </>
  )
}

export default User