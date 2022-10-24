import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp';
import User from './pages/User';
import NotFound from './pages/NotFound';
import AuthProvider from './Providers/AuthProvider';
import Login from './pages/Login';
import HomeAdmin from './pages/HomeAdmin';
import Layout from './pages/Layout';
import LayoutAdmin from './pages/LayoutAdmin';
import Initialization from './components/Initialization';

const App = () => {
  return (
    <AuthProvider>
      <Initialization>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='user/:id' element={<User />} />
          </Route>

          <Route path='/admin' element={<LayoutAdmin />}>
            <Route index element={<HomeAdmin />}/>
          </Route>

          <Route path='*' element={<NotFound />} status={404} />
        </Routes>
      </Initialization>
    </AuthProvider>
  );
}

export default App;
