import { useState,  } from "react";
import "./App.css";
import EditionDetails from "./components/EditionDetails"
import WorkDetails from "./components/WorkDetails"

function App() {

    const [input, setInput] = useState("");
  const [edition, setEdition] = useState("");
    const [work, setWork] = useState("");

  
  const handleFetchISBN = async (isbn) => {
    const response = await fetch(`https://openlibrary.org/isbn/${isbn}.json`)
    const data = await response.json()
    setEdition(data)
    handleFetchWork(data.works[0].key) 
    
  }
    const handleInputChange = (event) => {
    setInput(event.target.value);
    };
  
  const handleFetchWork = async (key) => {
    const response = await fetch(`https://openlibrary.org${key}.json`)
    const data = await response.json()
    setWork(data)
  }

  const handleSubmit = (event) => {
    handleFetchISBN(input)
    event.preventDefault()
  }
    return (<div className="App">
      <h1>hi</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleInputChange}></input>
        <input id="submitButton" type="submit" value="+" />
      </form>
      <div>
        <EditionDetails edition={edition} />
        <WorkDetails work={work}/>
      </div>
  </div>);
}

export default App;
