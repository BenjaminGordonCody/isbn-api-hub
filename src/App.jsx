import { useState } from "react";
import "./App.css";
import bookArrFromISBNArr from "./funcs/ISBNConversionFuncs";

function App() {
  //states ------------------------------------------------------
  const [arrLoaded, setArrLoaded] = useState(false);
  let [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  //inputs and submissions -----------------------------------------
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    let ISBNArr = input.split(" ");
    setInput("");
    bookArrFromISBNArr(ISBNArr, setBooks, setArrLoaded);
    event.preventDefault();
  };
  // what to show before the book array has been loaded
  if (!arrLoaded) {
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
        {books.forEach((book) => {
          console.log(book);
          return <div>books</div>;
        })}
      </div>
    );
  }
}

export default App;
