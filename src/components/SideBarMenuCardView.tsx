import React from 'react'
import { SideBarMenuCard } from '../types/types'
import { classNames } from '../util/classes'
import '../styles/SideBarMenuCardView.scss'

interface SideBarMenuCardViewProps {
  card: SideBarMenuCard
  isOpen: boolean
}

const SideBarMenuCardView = ({ card, isOpen }: SideBarMenuCardViewProps) => {
  return (
    <div className='SideBarMenuCardView'>
      <img className='profile' src={card.photoUrl} width='100%' />
    </div>
  )
}

export default SideBarMenuCardView
