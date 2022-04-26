import React from 'react'
import { SideBarMenuCard } from '../types/types'
import '../styles/SideBarMenuCardView.scss'
import {SideBarMenuCardViewProps } from './SideBarMenu.types'


const SideBarMenuCardView = ({ card, isOpen }: SideBarMenuCardViewProps) => {
  return (
    <div className='SideBarMenuCardView'>
      <img className='profile' src={card.photoUrl} width='100%' alt='falta :)' />
    </div>
  )
}

export default SideBarMenuCardView
