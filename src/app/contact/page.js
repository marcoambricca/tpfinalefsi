import '../styles/contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-form">
        <div className='input-field'>
          <label htmlFor="name">Nombre</label>
          <input type="text" placeholder="Nombre" id="name" required/>
        </div>
        <div className='input-field'>
          <label htmlFor="lastname">Apellido</label>
          <input type="text" placeholder="Apellido" id="lastname" required/>
        </div>
        <div className='input-field'>
          <label htmlFor="email">Correo electronico</label>
          <input type="text" placeholder="Correo electronico" id="email" required/>
        </div>
        <div className='input-field'>
          <label htmlFor="age">Edad</label>
          <input type="number" placeholder="Edad" id="age" required/>
        </div>
        <button className='send-btn'>Enviar</button>
      </div>
    </div>
  );
}