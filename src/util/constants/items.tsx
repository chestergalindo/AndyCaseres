import { SideBarMenuItem } from './types/types'

export const items: SideBarMenuItem[] = [
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