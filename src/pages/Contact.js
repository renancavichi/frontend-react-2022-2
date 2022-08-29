import { Link } from 'react-router-dom'
import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
            <h1>Contact</h1>

            <p>Aqui é o contact</p>
            <Link to='/'>Home</Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Contact