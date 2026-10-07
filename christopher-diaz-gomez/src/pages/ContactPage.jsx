import { useState } from 'react';
import Icon from '../components/Icon';
import PageHero from '../components/PageHero';

export default function ContactPage() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const limpiarFormulario = () => {
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  };

  return (
    <>
      <PageHero
        title="Contacto & Consultas del Archivo"
        subtitle="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <article className="contact-card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
            Canales de Atención
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem' }}>
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>

          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Icon name="mail" />
              </div>
              <div>
                <strong className="contact-title">Correo Electrónico</strong>
                <span className="contact-text">contacto@libreria-archivo.org</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Icon name="phone" />
              </div>
              <div>
                <strong className="contact-title">Teléfono de Sala</strong>
                <span className="contact-text">+57 (604) 444-2020</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Icon name="map-pin" />
              </div>
              <div>
                <strong className="contact-title">Sede Principal</strong>
                <span className="contact-text">Calle 48 #72-10, Edificio Bauhaus</span>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon-box">
                <Icon name="clock" />
              </div>
              <div>
                <strong className="contact-title">Horario de Consulta</strong>
                <span className="contact-text">Lunes a Viernes: 08:00 - 18:00</span>
              </div>
            </div>
          </div>
        </article>

        <article className="contact-card">
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
            Enviar Mensaje
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '24px' }}>
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <form aria-label="Formulario de contacto">
            <div className="form-group">
              <label htmlFor="nombre" className="form-label">
                Nombre Completo
              </label>
              <input
                id="nombre"
                type="text"
                className="form-control"
                value={nombre}
                onChange={(event) => setNombre(event.target.value)}
                placeholder="Ej. Ana María Gómez"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="nombre@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="asunto" className="form-label">
                Motivo de Consulta
              </label>
              <select
                id="asunto"
                className="form-control"
                value={asunto}
                onChange={(event) => setAsunto(event.target.value)}
              >
                <option value="">Selecciona un motivo...</option>
                <option value="prestamo">Consulta de libro en sala</option>
                <option value="donacion">Donación de archivo</option>
                <option value="investigacion">Apoyo en investigación académica</option>
                <option value="general">Información general</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje" className="form-label">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                className="form-control"
                value={mensaje}
                onChange={(event) => setMensaje(event.target.value)}
                placeholder="Describe brevemente tu solicitud..."
              />
            </div>

            <button type="button" className="btn btn-primary form-submit" onClick={limpiarFormulario}>
              <Icon name="send" className="icon-sm" />
              <span>Enviar Formulario</span>
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
