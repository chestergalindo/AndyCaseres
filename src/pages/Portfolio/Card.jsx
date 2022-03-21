import { BsGithub, BsBoxArrowUpRight } from 'react-icons/bs'
import './Portfolio.scss'
import { Fragment } from 'react'

const Card = (props) => {
  return (
    <Fragment>
      <div className='card'>
        <div class='card-content'>
          <img className='img-card' src={props.img} alt='andy' />
          <h3 className='card-title'>{props.title}</h3>
          <span className='info'>{props.info}</span>
        </div>
        <div className='icons-card'>
          <a
            className='icons-card-content'
            href={props.codigo}
            target='__blank'
          >
            <BsGithub />
          </a>
          <a className='icons-card-content' href={props.web} target='__blank'>
            <BsBoxArrowUpRight />
          </a>
        </div>
      </div>
    </Fragment>
  )
}

export default Card
