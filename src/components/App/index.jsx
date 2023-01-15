import { CardButton, Container, ProductInformation } from "./styles";

import Product from "../Product_3D";

function App() {
  return (
    <Container className="App">
      <Product />

      <ProductInformation>
        <span>Código: 42404</span>
        <h2>Sofá Margot II - Rosé</h2>
        <p>R$ 4.000</p>

        <CardButton>ADICIONAR À CESTA</CardButton>
      </ProductInformation>
    </Container>
  );
}

export default App;
