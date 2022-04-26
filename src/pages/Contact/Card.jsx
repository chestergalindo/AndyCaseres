import './Contact.scss'

//dejaste de utilizar tsx??
const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='container'>
        <span className='card-icon'>{props.icon}</span>
        <h3 className='card-title'>{props.title}</h3>
        <p className='card-parrafo'>{props.parrafo}</p>
      </div>
    </div>
  )
}

export default Card
