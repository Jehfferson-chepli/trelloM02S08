import React, { useState } from "react";
import "./Orcamento.css";

function Orcamento() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    sistema: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
    alert("Solicitação de orçamento enviada com sucesso! Entraremos em contato em breve.");
    
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      sistema: "",
      mensagem: ""
    });
  };

  return (
    <div className="fullscreen-container">
      <section id="orcamento" className="orcamento">
        <h2>Solicite seu Orçamento</h2>
        <p className="orcamento-intro">
          Preencha o formulário abaixo e nossa equipe entrará em contato para 
          fornecer um orçamento personalizado.
        </p>
        
        <form className="orcamento-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome Completo *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                placeholder="Digite seu nome completo"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">E-mail *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="seu@email.com"
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefone">Telefone/WhatsApp *</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
                placeholder="(11) 99999-9999"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="sistema">Tipo de Sistema *</label>
              <select
                id="sistema"
                name="sistema"
                value={formData.sistema}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="residencial">Sistema Residencial</option>
                <option value="comercial">Sistema Comercial</option>
                <option value="rural">Sistema Rural</option>
                <option value="industrial">Sistema Industrial</option>
              </select>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="mensagem">Mensagem (Opcional)</label>
            <textarea
              id="mensagem"
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              placeholder="Informações adicionais que possam nos ajudar no seu orçamento..."
            ></textarea>
          </div>
          
          <button type="submit" className="submit-btn">
            Solicitar Orçamento
          </button>
        </form>
        
        <div className="orcamento-info">
          <h3>Por que escolher nossa empresa?</h3>
          <ul>
            <li>⏰ Retorno em até 24 horas</li>
            <li>💰 Orçamento sem compromisso</li>
            <li>👨‍💼 Equipe técnica especializada</li>
            <li>📞 Atendimento personalizado</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Orcamento;