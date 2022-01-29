import './Contact.scss'

const Contact = () => {
  return (
    <div className='Contact'>
      <h1 className='title'>Contacto</h1>
      <div className='contacto-content'>
        <div className='Contact-Form'>
          <form className='Form' action=''>
            <h2 className='sub-title'>Ponte en contacto</h2>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div className='input'>
              <label for=''>Pon tu nombre*</label>
              <input type='text' />
            </div>
            <div class='textarea'>
              <label for=''>mensaje*</label>
              <textarea name='' id='' cols='30' rows='6'></textarea>
            </div>
            <input className='btn' type='submit' />
          </form>
        </div>
        <div className='Servicios'>
          <h2 className=''>title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            similique harum ullam? Rem quam, aspernatur iure obcaecati
            recusandae repudiandae voluptate facilis perspiciatis, quisquam
            dicta quaerat voluptatem, perferendis dolores sint autem.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact
