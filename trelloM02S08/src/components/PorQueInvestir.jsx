import React from "react";
import "./PorQueInvestir.css";

function PorQueInvestir() {
  return (
    <div className="fullscreen-container">
      <section id="porque-investir" className="porque-investir">
        <h2>Por que investir em Energia Solar?</h2>
        
        <div className="porque-investir-content">
          <div className="beneficio-item">
            <div className="beneficio-icon">💰</div>
            <div className="beneficio-texto">
              <h3>Redução da Conta</h3>
              <p>Economize até 90% na conta de energia elétrica.</p>
            </div>
          </div>
          
          <div className="beneficio-item">
            <div className="beneficio-icon">📈</div>
            <div className="beneficio-texto">
              <h3>Retorno Garantido</h3>
              <p>Payback em 4.6 anos e economia mensal garantida.</p>
            </div>
          </div>
          
          <div className="beneficio-item">
            <div className="beneficio-icon">🌿</div>
            <div className="beneficio-texto">
              <h3>Sustentabilidade</h3>
              <p>Energia limpa e renovável, ajudando o planeta.</p>
            </div>
          </div>
          
          <div className="beneficio-item">
            <div className="beneficio-icon">🏠</div>
            <div className="beneficio-texto">
              <h3>Valorização do Imóvel</h3>
              <p>Residências com placas solares aumentam até 10% no valor de mercado.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PorQueInvestir;