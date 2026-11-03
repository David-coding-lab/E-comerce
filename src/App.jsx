import { Box } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

function App() {
  return (
    <Box w='100%' minH='100vh'>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='login' element={<Login />} />
          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Box>
  )
}

export default App
