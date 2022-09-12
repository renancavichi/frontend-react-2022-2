import {useState, useEffect} from 'react'
import Header from "../components/Header"
import "./Contact.css"
import MainContainer from '../components/MainContainer'
import Footer from '../components/Footer'

const Contact = () => {
  
  const [count, setCount] = useState(0)
  const [nameUser, setNameUser] = useState("Renan")
  
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
        <button onClick={() => setNameUser("Marcos")}>Change name Marcos</button>
      </MainContainer>
      <Footer />
    </>
  )
}

export default Contact