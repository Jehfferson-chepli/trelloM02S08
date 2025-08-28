import React from "react";
import Navbar from "./components/Navbar";
import SobreNos from "./components/SobreNos";
import PorQueInvestir from "./components/PorQueInvestir";
import Produtos from "./components/Produtos";
import Orcamento from "./components/Orcamento";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SobreNos />
      <PorQueInvestir />
      <Produtos />
      <Orcamento />
      <Footer />
    </div>
  );
}

export default App;
