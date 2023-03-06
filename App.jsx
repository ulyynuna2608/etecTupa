//import React from "react";
//function App(){return <div> Olá mundo! </div>}

const Header = () => {
  return(
  <header>
    <h1>Aqui será o Titulo da Pagina</h1>
      <hr />
  </header>
)
}
const Footer = () => {
  return (
  <footer>
    <p>Direitos reservados</p>
  </footer>
  )
}

const App = () => {
  return (
   <div>
    <Header />
    <p>Aqui fica o body</p>
    <Footer />
  </div>
  )
  }
    export default App;
