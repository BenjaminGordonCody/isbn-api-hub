import { useState } from "react";
import "./App.css";
import EditionDetails from "./components/EditionDetails";
import WorkDetails from "./components/WorkDetails";
import bookArrFromISBNArr from "./components/BookObj";

function App() {
  const [arrLoaded, setArrLoaded] = useState(false);
  let [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    // THIS IS NEXT TO CHANGE, GIVE SETBOOKS AS AN ARGUMENT
    let ISBNArr = input.split(" ");
    setInput("");
    bookArrFromISBNArr(ISBNArr, setBooks, setArrLoaded);
    event.preventDefault();
  };
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
