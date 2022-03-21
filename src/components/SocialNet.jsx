import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import '../styles/SocialNet.scss'

const SocialNet = () => {
  return (
    <div className='social-net'>
      <a
        className='iconSocial'
        href='https://www.instagram.com/andycaseresdev/'
        target='__blank'
      >
        <BsInstagram />
      </a>
      <a
        className='iconSocial'
        href='https://twitter.com/AndyWuilliam'
        target='__blank'
      >
        <BsTwitter />
      </a>
      <a
        className='iconSocial'
        href='https://www.linkedin.com/in/andy-caseres-59642420a/'
        target='__blank'
      >
        <BsLinkedin />
      </a>
      <a
        className='iconSocial'
        href='https://github.com/andycaseres2/AndyCaseres'
        target='__blank'
      >
        <BsGithub />
      </a>
    </div>
  )
}

export default SocialNet
