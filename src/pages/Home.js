import {useEffect, useState} from 'react'
import Header from "../components/Header"
import "./Home.css"
import Footer from "../components/Footer"
import MainContainer from '../components/MainContainer'
import CardUser from '../components/CardUser'

const Home = () => {

  const [users, setUsers] = useState([])

  const requestUsers = async () => {
    const response = await fetch('http://localhost/pj3/api-php-ifsp-2022-2/user/list')
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
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
          : users.map((user) =>  
            (
              <CardUser setUsers={setUsers} users={users} key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id}>
                {user.email}
              </CardUser>
            )
          )
        }

      </MainContainer>
      <Footer />   
    </>
  )
}

export default Home