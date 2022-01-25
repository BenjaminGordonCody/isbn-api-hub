import { useState,  } from "react";
import "./App.css";
import EditionDetails from "./components/EditionDetails"

function App() {
   const blankBook = {
    description: {
      value: "Please enter an ISBN"
    }
  }
  const [book, setBook] = useState(blankBook);


  const [input, setInput] = useState("");
  
  const handleFetchISBN = async (isbn) => {
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    const data = await response.json()
    setBook(data)
  }
    const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    handleFetchISBN(input)
    event.preventDefault()
  }
    return <div className="App">
      <h1>hi</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange}></input>
        <input id="submitButton" type="submit" value="+" />
      </form>
      <div>
        <EditionDetails book={book}/>
      </div>
  </div>;
}

export default App;
