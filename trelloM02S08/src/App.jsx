import React from "react";
import Navbar from "./components/Navbar";
import SobreNos from "./components/SobreNos";
import PorQueInvestir from "./components/PorQueInvestir";

function App() {
  return (
    <div>
      <Navbar />
      
      <SobreNos />

      <PorQueInvestir />

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
