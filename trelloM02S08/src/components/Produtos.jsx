import React from "react";
import "./Produtos.css";

import produto1 from "../assets/completo.jpg";
import produto2 from "../assets/Painel.jpg";
import produto3 from "../assets/inversor.jpg";
import produto4 from "../assets/20kw.jpg";

function Produtos() {
  const produtos = [
    {
      id: 1,
      nome: "Sistema Residencial Completo",
      imagem: produto1,
      descricao: "Kit completo para residências com até 4 pessoas, incluindo painéis, inversor e monitoramento."
    },
    {
      id: 2,
      nome: "Painel Solar Premium 400W",
      imagem: produto2,
      descricao: "Painel de alta eficiência para máximo aproveitamento energético em espaços reduzidos."
    },
    {
      id: 3,
      nome: "Inversor Grid-Tie 5kW",
      imagem: produto3,
      descricao: "Inversor de conexão à rede com monitoramento inteligente e garantia de 10 anos."
    },
    {
      id: 4,
      nome: "Sistema Comercial 20kW",
      imagem: produto4,
      descricao: "Solução completa para pequenas e médias empresas, com retorno garantido em até 3 anos."
    }
  ];

  return (
    <div className="fullscreen-container">
      <section id="produtos" className="produtos">
        <h2>Nossos Produtos</h2>
        <p className="produtos-intro">Conheça nossas soluções em energia solar</p>
        
        <div className="produtos-grid">
          {produtos.map(produto => (
            <div key={produto.id} className="produto-card">
              <div className="produto-imagem">
                <img src={produto.imagem} alt={produto.nome} />
              </div>
              <div className="produto-info">
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <button className="produto-btn">Saiba mais</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Produtos;