import Nav from './components/Nav'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import { UserContextProvider } from './contexts/UserContext';
import Course from './pages/Course';
import Profile from './pages/Profile';
import EnrollCourse from './pages/EnrollCourse';
import AddCourse from './pages/AddCourse';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}>
            <Route index element={<Home/>} />
            <Route path='register' element={<Register/> } />
            <Route path='login' element={<Login />} />
            <Route path='profile' element={<Profile/> } />
            <Route path='course' element={<Course/> } />
            <Route path='enroll_course' element={<EnrollCourse/>} />
            <Route path='add_course' element={<AddCourse />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>
  )
}

export default App
