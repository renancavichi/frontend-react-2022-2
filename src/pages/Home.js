import {useEffect, useState} from 'react'
import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import CardComment from '../components/CardComment'

const Home = () => {

  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch('https://api.github.com/users')
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    requestUsers()
  },[])

  return (
    <>
      <Header />

      <MainContainer>
        <h1>Home</h1>
        <p>Lista usuários API Git Hub:</p>


        {
          users.length === 0
          ? <p>Nenhum usuário</p>
          : users.map((user) => { 
            return (
              <CardComment key={user.id} avatarUrl={user.avatar_url} name={user.login}>
                {user.html_url}
              </CardComment>
            )
          })
        }

      </MainContainer>
      <Footer />   
    </>
  )
}

export default Home