import React from "react";
import Navbar from "./components/Navbar";
import SobreNos from "./components/SobreNos";
import PorQueInvestir from "./components/PorQueInvestir";
import Produtos from "./components/Produtos";

function App() {
  return (
    <div>
      <Navbar />
      
      <SobreNos />

      <PorQueInvestir />

      <Produtos />

      <section id="orcamento" style={{ height: "100vh", padding: "40px" }}>
        <h1>Orçamento</h1>
      </section>
    </div>
  );
}

export default App;
