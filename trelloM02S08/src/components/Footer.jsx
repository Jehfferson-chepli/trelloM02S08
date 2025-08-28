import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Energia Solar 365</h3>
            <p>Sua parceira em soluções sustentáveis de energia solar.</p>
            <div className="footer-info">
              <p><strong>CNPJ:</strong> 12.345.678/0001-90</p>
              <p><strong>E-mail:</strong> contato@energiasolar365.com.br</p>
              <p><strong>Telefone:</strong> (11) 3456-7890</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Endereço</h4>
            <p>
              Rua das Energias Renováveis, 123<br/>
              Jardim Solar<br/>
              São Paulo - SP<br/>
              CEP: 01234-567
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Horário de Atendimento</h4>
            <p>
              Segunda a Sexta: 8h às 18h<br/>
              Sábado: 9h às 13h<br/>
              Domingo: Fechado
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Redes Sociais</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <span className="social-icon">📘</span>
              </a>
              <a href="#" aria-label="Instagram">
                <span className="social-icon">📷</span>
              </a>
              <a href="#" aria-label="WhatsApp">
                <span className="social-icon">💬</span>
              </a>
              <a href="#" aria-label="YouTube">
                <span className="social-icon">📺</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2023 Energia Solar 365 - Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;