import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar /> {/* navbar no topo */}

      {/* Seções de exemplo */}
      <section id="sobre" style={{ height: "100vh", padding: "40px" }}>
        <h1>Sobre Nós</h1>
      </section>
      <section id="investir" style={{ height: "100vh", padding: "40px" }}>
        <h1>Por que investir?</h1>
      </section>
      <section id="produtos" style={{ height: "100vh", padding: "40px" }}>
        <h1>Produtos</h1>
      </section>
      <section id="orcamento" style={{ height: "100vh", padding: "40px" }}>
        <h1>Orçamento</h1>
      </section>
    </div>
  );
}

export default App;
