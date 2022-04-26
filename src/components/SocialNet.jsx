import { BsInstagram, BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs'
import '../styles/SocialNet.scss'

const socialMediaList = [
  {
    className:iconSocial,
    href:'https://www.instagram.com/andycaseresdev/',
    target: __blank,
    icon: BsInstagram
  },
  {
    className:iconSocial,
    href:'https://twitter.com/AndyWuilliam',
    target: __blank,
    icon: BsTwitter
  },
]

const SocialNet = () => {
  return (
    <div className='social-net'>
      {socialMediaList.map((element)=>(
        <a
        className=element.className
        href= element.href
        target= elemen.target
      >
        < element.icon />
      </a>
      ))}
      {/* <a
        className='iconSocial'
        href=
        target=''
      >
        
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
      </a> */}
    </div>
  )
}

export default SocialNet
