import Footer from "../components/Footer"
import Header from "../components/Header"
import "./Home.css"

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
            <h1>Home</h1>

            <p>Na pesquisa de 2018 sobre hábitos de desenvolvedores do site Stack Overflow, o React foi a terceira biblioteca ou framework[8] mais citado pelos usuários e desenvolvedores profissionais, ficando atrás somente do Node.js e Angular, respectivamente.[9]</p>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default Home