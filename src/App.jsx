import { useState } from "react";
import Card from "./components/Card";
import data from "./assets/data";
import "./main.css";

function App() {
  const [step, setStep] = useState(0);

  const renderedCards = [];
  for (let i = 0; i <= step; i++) {
    const { title, text } = data[i];
    renderedCards.push(
      <Card key={i} title={title} text={text} band={data[i].band} />
    );
  }

  return (
    <div className="App">
      <header>
        <h2 style={{ textAlign: "center", fontSize: "30px" }}>
          Hecho con mucho cariño de Ángel para Gali
        </h2>
      </header>
      <div className="cards-container">{renderedCards}</div>

      <button
        class="button-82-pushable"
        role="button"
        onClick={() => {
          if (step < data.length - 1) {
            setStep(step + 1);
          }
        }}
        style={{ visibility: step === data.length - 1 && "hidden" }}
      >
        <span class="button-82-shadow"></span>
        <span class="button-82-edge"></span>
        <span class="button-82-front text">Siguiente</span>
      </button>
    </div>
  );
}

export default App;
