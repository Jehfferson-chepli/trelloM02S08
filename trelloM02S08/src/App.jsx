import React from "react";
import Navbar from "./components/Navbar";
import SobreNos from "./components/SobreNos";
import PorQueInvestir from "./components/PorQueInvestir";
import Produtos from "./components/Produtos";
import Orcamento from "./components/Orcamento";

function App() {
  return (
    <div>
      <Navbar />
      <SobreNos />
      <PorQueInvestir />
      <Produtos />
      <Orcamento />
    </div>
  );
}

export default App;
