import { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <section className="contact-page">
      <div className="section-header section-header--stacked">
        <div>
          <p className="eyebrow">Contacto</p>
          <h1>Escríbenos</h1>
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-info">
          <h2>Atención y consultas</h2>
          <p>Estamos listos para responder dudas sobre la colección, recomendaciones y contenido editorial.</p>
          <ul>
            <li>📍 Bogotá, Colombia</li>
            <li>📞 +57 310 123 4567</li>
            <li>✉️ hola@bibliotecavisual.com</li>
          </ul>
        </div>

        <form className="contact-form">
          <label>
            Nombre
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
          </label>

          <label>
            Correo electrónico
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </label>

          <label>
            Asunto
            <select value={subject} onChange={(event) => setSubject(event.target.value)}>
              <option value="">Selecciona un asunto</option>
              <option value="consulta">Consulta general</option>
              <option value="pedido">Pedido de catálogo</option>
              <option value="recomendacion">Recomendación editorial</option>
            </select>
          </label>

          <label>
            Mensaje
            <textarea rows="5" value={message} onChange={(event) => setMessage(event.target.value)} />
          </label>

          <button type="button" className="primary-button" onClick={handleSend}>
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
