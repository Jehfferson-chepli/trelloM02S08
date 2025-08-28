import React from "react";
import "./SobreNos.css";
import painelSolar from "../assets/foto 1.jpg";

function SobreNos() {
  return (
    <div className="fullscreen-container">
      <section id="sobre-nos" className="sobre-nos">
        <h2>Sobre Nós</h2>
        <div className="sobre-nos-content">
          <img src={painelSolar} alt="Painéis solares em telhado" />
          <p>
            Somos a <strong>Energia Solar 365</strong>, referência em projetos sustentáveis. 
            Instalamos e gerenciamos sistemas residenciais, comerciais e rurais com 
            alta eficiência e confiabilidade.
          </p>
        </div>

        <div className="sobre-nos-extra">
          <h3>Missão</h3>
          <p>Levar energia limpa e acessível para todos os brasileiros.</p>

          <h3>Visão</h3>
          <p>Ser líder em soluções de energia solar sustentável no Brasil até 2030.</p>

          <h3>Valores</h3>
          <ul>
            <li>Compromisso com a sustentabilidade</li>
            <li>Inovação constante</li>
            <li>Transparência e confiança</li>
            <li>Excelência no atendimento</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SobreNos;