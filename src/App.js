import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  );
}

export default App;
