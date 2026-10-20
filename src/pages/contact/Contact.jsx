import "./Contact.scss";
import { Header } from "../../components/organisms/Header";
import { Footer } from "../../components/organisms/Footer";
import { Button } from "../../components/atoms/Button";

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <Header />
      </div>
      <div className="desc">
        <div className="container">
          <p>PONTE EN CONTACTO</p>
          <h1>Contáctanos</h1>
          <p>¡Estamos aquí para ayudarte! Si tienes alguna pregunta,</p>
          <p>comentario o necesitas asistencia, no dudes en escribirnos.</p>
        </div>
      </div>
      <div className="container">
        <div className="pre-footer">
          <ul className="info">
            <h3>Información de contacto</h3>
            <li className="contact">
              <div className="phone contact-info">
                <div>
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <h5>Teléfono</h5>
                  <p>+569 111111111</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="email contact-info">
                <div>
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <h5>Correo electrónico</h5>
                  <p>support@velvetique.com</p>
                  <p>Te responderemos dentro de las próximas 24 horas.</p>
                </div>
              </div>
            </li>
            <li className="contact">
              <div className="location contact-info">
                <div>
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <h5>Visítanos</h5>
                  <p>1234 Velvetique, Maipú, Región Metropolitana</p>
                  <p>Con cita previa o durante el horario de atención.</p>
                </div>
              </div>
            </li>
          </ul>
          <div className="message">
            <h3>Envíanos un mensaje</h3>
            <p>------</p>
            <div>
              <form className="name-mail">
                <div id="name">
                  <label>Nombre completo</label>
                  <br />
                  <input type="text" placeholder="Tu nombre" />
                </div>
                <div id="email">
                  <div>
                    <label>Correo electrónico</label>
                  </div>
                  <input type="text" placeholder="tu@correo.com" />
                </div>
              </form>
            </div>
            <div className="comment">
              <div>
                <label className="msg">Asunto</label>
              </div>
              <input type="text" placeholder="Escribe el asunto" />
              <div className="msg">
                <label>Mensaje</label>
              </div>
              <textarea>¿Cómo podemos ayudarte?</textarea>
              <br />
              <Button variant="primary">Envía un mensaje</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
