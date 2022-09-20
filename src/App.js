import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp';
import User from './pages/User';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/sign-up' element={<SignUp />} />
      <Route path='/user/:id' element={<User />} />
      <Route path='*' element={<NotFound />} status={404} />
    </Routes>
  );
}

export default App;
