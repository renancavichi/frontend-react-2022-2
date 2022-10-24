import {useEffect, useState} from 'react'
import "./Home.css"
import CardUser from '../components/CardUser'
import { API_PATH  } from "../config"
import Modal from '../components/Modal'
import ButtonLoading from '../components/ButtonLoading'
import useAuth from '../hooks/useAuth'

const HomeAdmin = () => {

  const [users, setUsers] = useState([])
  const [userToEdit, setUserToEdit] = useState({
    id: "",
    name: "",
    email: "",
    avatar: "",
  })
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [userLogged] = useAuth()
  const {idUser, token} = userLogged

  const requestUsers = async () => {
    const response = await fetch(`${API_PATH}user/list`)
    const result = await response.json()
    console.log(result.success.message)
    setUsers(result.data)
  }

  const handleChange = (event) =>{
    setUserToEdit({...userToEdit, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    setIsLoading(true)
    event.preventDefault()
    const response = await fetch(`${API_PATH}user/update`, {
      method: 'PUT',
      body: JSON.stringify(userToEdit),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `${idUser} ${token}`
      }
    })
    const result = await response.json()
    if(result?.success && result?.user){
      const userUpdated = result.user
      const usersUpdated = users.map((user) => {
        return user.id === userUpdated.id ? userUpdated : user  
      })
      setUsers(usersUpdated)
      setShowModal(false)
    }
    console.log(JSON.stringify(result))
    setIsLoading(false)
}

  useEffect(() => {
    requestUsers()
  },[])

  return (
    <>
      <h1>Home Admin</h1>
      <p>Lista usuários API Git Hub:</p>

      {
        users.length === 0
        ? <p>Nenhum usuário</p>
        : users.map((user) =>  
          (
            <CardUser setUsers={setUsers} users={users} key={user.id} avatarUrl={user.avatar} name={user.name} id={user.id} setShowModal={setShowModal} setUserToEdit={setUserToEdit}>
              {user.email}
            </CardUser>
          )
        )
      }

      <Modal showModal={showModal} setShowModal={setShowModal}>
        <h1>Edit User</h1>
        <form onSubmit={(event) => handleSubmit(event)}>
          <input type="hidden" name="id" value={userToEdit.id}/>
          <p>Name: <input type="text" name="name" value={userToEdit.name} onChange={(event)=>handleChange(event)}/></p>
          <p>Email: <input type="text" name="email" value={userToEdit.email} onChange={(event)=>handleChange(event)}/></p>
          <p>Avatar: <input type="text" name="avatar" value={userToEdit.avatar} onChange={(event)=>handleChange(event)}/></p>
          <ButtonLoading type="submit" isLoading={isLoading}>Update</ButtonLoading>
        </form>
      </Modal>
    </> 
  )
}



export default HomeAdmin