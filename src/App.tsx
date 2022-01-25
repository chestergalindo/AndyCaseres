import SideBarMenu from './components/SideBarMenu'
import { SideBarMenuItem, SideBarMenuCard } from './types/types'
import {
  FcDocument,
  FcInfo,
  FcCallback,
  FcHome,
  FcOpenedFolder,
} from 'react-icons/fc'
import imagenes from './assets/imagenes.js'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Portfolio from './pages/Portfolio/Portfolio'

function App(): JSX.Element {
  const items: SideBarMenuItem[] = [
    {
      id: '1',
      label: 'INICIO',
      icon: FcHome,
      url: '/',
    },
    {
      id: '2',
      label: 'ACERCA DE',
      icon: FcInfo,
      url: '/About',
    },
    {
      id: '3',
      label: 'CURRICULUM',
      icon: FcDocument,
      url: '/Curriculum',
    },
    {
      id: '4',
      label: 'PORTAFOLIO',
      icon: FcOpenedFolder,
      url: '/Portfolio',
    },
    {
      id: '5',
      label: 'CONTACTO',
      icon: FcCallback,
      url: '/Contact',
    },
  ]
  const card: SideBarMenuCard = {
    id: 'card01',
    displayName: 'Andy Caseres',
    title: 'Portafolio',
    photoUrl: imagenes.profileImage,
    url: '/',
  }
  return (
    <BrowserRouter>
      <SideBarMenu items={items} card={card} />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />

        <Route path='/Portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
