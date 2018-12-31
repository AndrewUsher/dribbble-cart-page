import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function Card({ color, image, title, description, size, quantity }) {
  return (
    <div className="card">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="info-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="options-container">
          <span>
            <div
              style={{ width: "10px", height: "10px", backgroundColor: color }}
            />
          </span>
          <span>{size}</span>
          <span>{quantity}</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <h1>My Cart</h1>
        <h3>
          Total Shopping Cost: <strong>Rs 2994</strong>
        </h3>
      </header>
      <div className="card-container">
        <Card
          color="#ee6f57"
          image="https://images.footlocker.com/is/image/EBFL2/R2818600?wid=200&hei=200&fmt=png-alpha"
          title="Arrow Top"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
        <Card
          color="#cb3737"
          image="https://images.footlocker.com/is/image/EBFL2/CQ2014?wid=200&hei=200&fmt=png-alpha"
          title="Plain Shirt"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
        <Card
          title="Arrow Top"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
        <Card
          title="Arrow Top"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
        <Card
          title="Arrow Top"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
        <Card
          title="Arrow Top"
          description="Favorite top for youngsters"
          size="L"
          quantity={1}
        />
      </div>
      <div className="buttons-container">
        <button data-dark>Proceed to Checkout</button>
        <button data-light>Continue shopping</button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
