import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import {
  FcDocument,
  FcInfo,
  FcCallback,
  FcHome,
  FcOpenedFolder,
} from 'react-icons/fc'
import SideBarMenu from './components/SideBarMenu'
import { items, card } from './utils/constansts'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'
import Curriculum from './pages/Curriculum/Curriculum'
import Contact from './pages/Contact/Contact'

import imagenes from './assets/imagenes.js'

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <SideBarMenu items={items} card={card} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Curriculum' element={<Curriculum />} />
        <Route path='/Portfolio' element={<Portfolio />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Navigate replace to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
