import { useState } from "react";
import "./index.css";
import Circle from "./components/Circle";

function App() {
  const [userInput, setUserInput] = useState("");
  const [status, setStatus] = useState(false);
  const [styles, setStyles] = useState({
    color: "black",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: 300,
  });

  console.log(styles.fontWeight);
  console.log(status);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="enter text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />

      <h3 style={styles}>{userInput}</h3>

      <div className="stylingContainer">
        <div className="size">
          <h2
            onClick={() =>
              setStyles({ ...styles, fontSize: styles.fontSize - 5 })
            }
          >
            -
          </h2>
          <h2
            onClick={() =>
              setStyles({ ...styles, fontSize: styles.fontSize + 5 })
            }
          >
            +
          </h2>
        </div>

        <div className="color">
          <Circle
            color="blue"
            setStyles={() => setStyles({ ...styles, color: "blue" })}
          />
          <Circle
            color="red"
            setStyles={() => setStyles({ ...styles, color: "red" })}
          />
          <Circle
            color="green"
            setStyles={() => setStyles({ ...styles, color: "green" })}
          />
          <Circle
            color="yellow"
            setStyles={() => setStyles({ ...styles, color: "yellow" })}
          />
          <Circle
            color="purple"
            setStyles={() => setStyles({ ...styles, color: "purple" })}
          />
        </div>
        <div className="additional">
          <h4 onClick={() => setStyles({ ...styles, fontStyle: "normal" })}>
            normal
          </h4>
          <h4 onClick={() => setStyles({ ...styles, fontStyle: "italic" })}>
            italic
          </h4>
          <h4
            onClick={() => {
              setStatus(!status);
              setStyles({ ...styles, fontWeight: status ? 300 : 800 });
            }}
          >
            bold
          </h4>
        </div>
      </div>
    </div>
  );
}

export default App;
