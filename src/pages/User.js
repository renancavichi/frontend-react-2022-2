import "./Home.css"
import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { API_PATH  } from "../config"

const User = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  const requestUserById = async (id) => {
    const response = await fetch(`${API_PATH}user/by-id?id=${id}`)
    const result = await response.json()
    console.log(result?.success?.message)
    if(result?.error){
      navigate('/not-found')
    }
    setUser(result.data)
  }

  useEffect(() => {
    requestUserById(id)
  // eslint-disable-next-line
  },[])

  return (
    <>
      {
        user ? 
        <>
          <h1>{user.name}</h1>
          <img src={user.avatar} alt={user.name} />
          <p>Email: {user.email}</p>
        </> 
        : <p>Loading user...</p>
      }
    </>
  )
}

export default User