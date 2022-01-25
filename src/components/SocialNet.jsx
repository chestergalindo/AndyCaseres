import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import '../styles/SocialNet.scss'

const SocialNet = () => {
  return (
    <div className='social-net'>
      <a className='iconSocial' href='#'>
        <BsInstagram />
      </a>
      <a className='iconSocial' href='#'>
        <BsTwitter />
      </a>
      <a className='iconSocial' href='#'>
        <BsLinkedin />
      </a>
      <a className='iconSocial' href='#'>
        <BsGithub />
      </a>
    </div>
  )
}

export default SocialNet
