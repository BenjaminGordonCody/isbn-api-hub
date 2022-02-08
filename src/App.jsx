import { useState } from "react";
import "./App.css";
import bookArrFromISBNArr from "./funcs/ISBNConversionFuncs";
import LibraryCard from "./components/LibraryCard.jsx";

function App() {
  //states ------------------------------------------------------
  const [arrLoaded, setArrLoaded] = useState(false);
  let [books, setBooks] = useState([]);
  const [input, setInput] = useState("9780140055795");

  //inputs and submissions -----------------------------------------
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let ISBNArr = input.split(" ");
    console.log("input= ", input, "ISBNArr= ", ISBNArr, "books= ", books);
    setInput("");
    const booksArr = await bookArrFromISBNArr(ISBNArr);
    setBooks(booksArr);
    setArrLoaded(true);
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
    // console.log(books);
    console.log(books);
    return (
      <div className="App">
        <div>test text</div>
        {books.map((book, index) => {
          return <LibraryCard book={book} />;
        })}
      </div>
    );
  }
}

export default App;
