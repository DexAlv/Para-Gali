import { useState } from "react";
import responses from "../data/nresponses";

function Card({ title, text, band }) {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <hr />
      <p className="card-text">{text}</p>
      {!band ? (
        ""
      ) : (
        <div className="btn-cont">
          <a href="https://www.youtube.com/shorts/jYD3__SWFAg">
            <button
              className=" ans btn-y"
              onClick={() => {
                alert(
                  "Felicidades, acabas de hacer un pacto con el diablo de por vida :D."
                );
              }}
            >
              Si
            </button>
          </a>
          {count !== responses.length ? (
            <button
              className="ans btn-n"
              onClick={() => {
                setCount(count + 1);
                alert(responses[count]);
              }}
            >
              No
            </button>
          ) : (
            <a href="https://www.youtube.com/shorts/jYD3__SWFAg">
              <button
                className=" ans btn-y"
                onClick={() => {
                  alert(
                    "Felicidades, acabas de hacer un pacto con el diablo de por vida :D."
                  );
                }}
              >
                Si
              </button>
            </a>
          )}
        </div>
      )}
    </div>
  );
}

export default Card;
