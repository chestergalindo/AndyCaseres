const Skill = (props) => {
  return (
    <div className='skill'>
      <div className='skill-content'>
        <img className='skill-icon' src={props.skill} alt='' />
      </div>
    </div>
  )
}

export default Skill
