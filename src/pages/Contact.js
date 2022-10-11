import {useState, useEffect} from 'react'
import Header from "../components/Header"
import "./Contact.css"
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'

import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'

const Contact = () => {
  
  const [count, setCount] = useState(0)
  const [nameUser] = useState("Renan")

  const [userLogged, setUserLogged] = useContext(AuthContext)
  
  useEffect(() => {
    console.log(count)
  },[count])

  return (
    <>
      <Header />
      <MainContainer>
        <h1>Olá {nameUser}!</h1>
        <h1>My number is: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Plus 1</button>
        <br/><br/>
        <button onClick={() => setUserLogged({...userLogged, idUser: '20'})}>Change name Marcos</button>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Contact