import React from 'react'
import { Container } from 'react-bootstrap';
import "../Footer/footer.css"

const Footer = () => {
  return (
	<>
    <footer className="footer">
      <div>
        <p>
          <span className="footer-brand">© 2023 <span className="brand-color">FarmaTurno</span>.</span> Todos los derechos reservados
        </p>
        <div className="footer-links">
          <a href="/privacidad" className="footer-link">Políticas de privacidad</a>
          <a href="/terminos" className="footer-link">Términos y condiciones</a>
          <a href="/preguntas" className="footer-link">Preguntas frecuentes</a>
        </div>
      </div>
    </footer>
	</>
  )
}

export default Footer
