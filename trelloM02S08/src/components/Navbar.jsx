import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-top"></div>
      <div className="navbar-bottom">
        <ul>
          <li>
            <a 
              href="#sobre-nos" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("sobre-nos");
              }}
            >
              Sobre Nós
            </a>
          </li>
          <li>
            <a 
              href="#porque-investir" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("porque-investir");
              }}
            >
              Por que investir?
            </a>
          </li>
          <li>
            <a 
              href="#produtos" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("produtos");
              }}
            >
              Produtos
            </a>
          </li>
          <li>
            <a 
              href="#orcamento" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("orcamento");
              }}
            >
              Orçamento
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;