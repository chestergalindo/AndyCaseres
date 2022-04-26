import { SideBarMenuCard, SideBarMenuItem } from '../types/types'

export interface SideBarMenuProps {
    items: SideBarMenuItem[]
    card: SideBarMenuCard
  }

export interface SideBarMenuCardViewProps {
    card: SideBarMenuCard
    isOpen: boolean
  }