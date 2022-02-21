import { useState } from "react";
import "./App.css";
import LibraryCard from "./components/LibraryCard.jsx";

function App() {
  //states ------------------------------------------------------
  const [ISBNs, setISBNs] = useState([]);
  const [input, setInput] = useState(
    "9780140055795" // 9781857333800 9781984806154 9780804172042 9780345388964 9781400076215 9780593087480 9780192741783 9780025045408 9781782599593 9780007466023"
  );
  const [exportArr, setExportArr] = useState([]);

  //inputs and submissions -----------------------------------------
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const ISBNArr = input.split(" ");
    setInput("");
    setISBNs(ISBNArr);
  };

  // what to show before the book array has been loaded
  if (!ISBNs[0]) {
    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <input type="text" value={input} onChange={handleInputChange}></input>
          <input id="submitButton" type="submit" value="+" />
        </form>
      </div>
    );
  } else {
    //what to show after the book array has been loaded
    return (
      <div className="App">
        <div>test text</div>
        {ISBNs.map((ISBN) => {
          return (
            <LibraryCard
              ISBN={ISBN}
              exportArr={exportArr}
              setExportArr={setExportArr}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
