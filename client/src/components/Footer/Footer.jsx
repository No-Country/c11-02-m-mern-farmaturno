import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Row className="footer-container">
        <p className="footer-brand">
          <span className="footer-brand">
            © 2023 <span className="brand-color">FarmaTurno</span>.
          </span>{' '}
          Todos los derechos reservados
        </p>
        <Row lg={4} className="footer-links justify-content-center">
          <Col xs={12}>
            <a href="/privacidad" className="footer-link p-0">
              Políticas de privacidad
            </a>
          </Col>
          <Col xs={12}>
            <a href="/terminos" className="footer-link p-0">
              Términos y condiciones
            </a>
          </Col>
          <Col xs={12}>
            <a href="/preguntas" className="footer-link p-0">
              Preguntas frecuentes
            </a>
          </Col>
        </Row>
      </Row>
    </footer>
  );
};

export default Footer;
