import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./components/Cart";
import Product from "./components/Product";
import product from "./product.json";

function App() {
  return (
    <div>
      <Cart />
      <div className="products">
        {product.map((product, id) => (
          <Product key={id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
