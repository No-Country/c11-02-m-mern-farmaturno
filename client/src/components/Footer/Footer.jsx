import { Col, Row } from 'react-bootstrap';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer1">
      <Row className="footer-container1">
        <p className="footer-brand1">
          <span className="footer-brand1">
            © 2023 <span className="brand-color1">FarmaTurno</span>.
          </span>{' '}
          Todos los derechos reservados
        </p>
        <Row lg={3} className="footer-links1 justify-content-center">
          <Col xs={12}>
            <a href="/privacidad" className="footer-link1 p-0">
              Políticas de privacidad
            </a>
          </Col>
          <Col xs={12}>
            <a href="/terminos" className="footer-link1 p-0">
              Términos y condiciones
            </a>
          </Col>
        </Row>
      </Row>
    </footer>
  );
};

export default Footer;