import { Link } from 'react-router-dom'
import {TbTrash as IconTrash, TbEdit as IconEdit} from 'react-icons/tb'
import { API_PATH  } from "../config"
import useAuth from '../hooks/useAuth'

const CardUsers = ({avatarUrl, name, children, id, users, setUsers, setShowModal, setUserToEdit}) => {

  const {card, avatar, box, userName, text, buttonLink} = style
  const [userLogged] = useAuth()
  const {isLogged, idUser, token, role} = userLogged

    const deleteUser = async (id) => {
        //const formData = new FormData()
        //formData.append('id', id)
        const response = await fetch(`${API_PATH}user/delete`,{
            method: 'DELETE',
            body: JSON.stringify({id: id}),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `${idUser} ${token}`
            }
        })
        const result = await response.json()
        if(result?.success){
            const usersFiltered = users.filter((user) => {return user.id !== id})
            setUsers(usersFiltered)
        } else {
            console.error(result?.error)
        }
    }

    const handleEdit = () =>{
        setShowModal(true)
        setUserToEdit({
            id,
            name,
            email: children,
            avatar: avatarUrl,
          })
    }

  return (
    <div style={card}>
        <Link to={`/user/${id}`}>
            <img src={avatarUrl} style={avatar} alt={name}/>
        </Link>
        <div style={box}>
            <Link to={`/user/${id}`}>
                <h1 style={userName}>{name}</h1>
                <p style={text}>{children}</p>
            </Link>
            {
               isLogged && role.includes('admin') ?
               <>
                <IconTrash style={buttonLink} onClick={() => deleteUser(id)} />
               </>
               : ''
            }
            {
               isLogged && id === idUser ?
               <>
                <IconEdit style={buttonLink} onClick={() => handleEdit()} />
               </>
               : ''
            }
        </div>
    </div>
  )
}

const style = {
    avatar: {
        background: '#CCC',
        borderRadius: '50%',
        height: '50px',
        width: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px 0 0'
    },
    card: {
        width: '300px',
        background: '#EEE',
        display: 'flex',
        padding: '10px',
        borderRadius: '10px',
        margin: '15px'
    },
    userName: {
        margin: 0,
        fontSize: '0.9rem',
        color: "#000"
    },
    text: {
        margin: '0 0 10px 0',
        color: "#333"
    },
    box: {
        width: '235px'
    },
    buttonLink: {
        cursor: 'pointer',
        padding: '5px',
        borderRadius: '5px',
        marginRight: '10px'       
    }

}

export default CardUsers