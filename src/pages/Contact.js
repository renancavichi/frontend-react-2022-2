import {useState, useEffect} from 'react'
import "./Contact.css"
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  
  const [count, setCount] = useState(0)
  const [nameUser] = useState("Renan")

  const [userLogged, setUserLogged] = useContext(AuthContext)
  
  useEffect(() => {
    console.log(count)
  },[count])

  return (
    <>
      <h1>Olá {nameUser}!</h1>
      <h1>My number is: {count}</h1>
      <Button onClick={() => setCount(count + 1)}>Plus 1</Button>
      <br/><br/>
      <Button onClick={() => setUserLogged({...userLogged, idUser: '20'})}>Change name Marcos</Button>
      
      <br/><br/>
      <h2>Exemplo uso bootstrap</h2>
      <br/>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/54189051?v=4" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Contact