import { Col, Row } from 'react-bootstrap';
import '../Footer/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-brand">
          © 2023 <span className="brand-color">FarmaTurno</span>. Todos los
          derechos reservados
        </p>
        <Row lg={3} className="footer-links justify-content-center">
          <Col className="customColFooter" xs={12}>
            <a
              href="https://drive.google.com/file/d/1LxTcS5IrkKUMO1f0uNqHt8xra3-TplGK/view"
              target="_blank"
              className="footer-link p-0"
            >
              Políticas de privacidad
            </a>
          </Col>
          <Col xs={12}>
            <a
              href="https://drive.google.com/file/d/1FiGncNfCX7mb2QH-fDWp6-VFUQfnUgSo/view"
              target="_blank"
              className="footer-link p-0"
            >
              Términos y condiciones
            </a>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
