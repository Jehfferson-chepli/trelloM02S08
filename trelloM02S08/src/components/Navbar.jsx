import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-top"></div>
      <div className="navbar-bottom">
        <ul>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#investir">Por que investir?</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#orcamento">Orçamento</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
