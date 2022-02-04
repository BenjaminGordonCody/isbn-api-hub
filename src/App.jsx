import { useState } from "react";
import "./App.css";
import EditionDetails from "./components/EditionDetails";
import WorkDetails from "./components/WorkDetails";
import bookObjFromISBN from "./components/BookObj";

function App() {
  const [bookObjLoaded, setBookObjLoaded] = useState(false);
  let [books, setBooks] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    // THIS IS NEXT TO CHANGE, GIVE SETBOOKS AS AN ARGUMENT
    let bookArr = input.split(" ");
    setInput("");
    bookArr.forEach((ISBN, index) => {
      bookArr[index] = bookObjFromISBN(ISBN);
    });
    console.log(bookArr);
    setBookObjLoaded(true);
    event.preventDefault();
  };
  if (!bookObjLoaded) {
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
          return <bookObjContainer ISBN={book} />;
        })}
      </div>
    );
  }
}

export default App;
