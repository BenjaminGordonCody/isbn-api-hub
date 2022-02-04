import { useState } from "react";
import "./App.css";
import EditionDetails from "./components/EditionDetails";
import WorkDetails from "./components/WorkDetails";
import BookObj from "./components/BookObj";

function App() {
  // const [input, setInput] = useState("");
  // const [edition, setEdition] = useState("");
  // const [work, setWork] = useState("");

  // const handleInputChange = (event) => {
  //   setInput(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   handleFetchISBN(input);
  //   event.preventDefault();
  // };
  return (
    <div className="App">
      <BookObj ISBN="0356513173" />
      {/* <h1>hi</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          value={input}
          onChange={handleInputChange}
        ></textarea>
        <input id="submitButton" type="submit" value="+" />
      </form>
      <div>
        <EditionDetails edition={edition} />
        <WorkDetails work={work} />
      </div> */}
    </div>
  );
}

export default App;
