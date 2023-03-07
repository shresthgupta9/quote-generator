import { useState, useEffect } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("")

  function getRandomQuote() {
    return setQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((jsonData) => {
        setQuotes(jsonData)
        setQuote(jsonData[Math.floor(Math.random() * jsonData.length)])
      })
  }, [])

  console.log(quotes);

  return (
    <div className="App">

      <div className="heading">
        <h1>Quote Generator</h1>
      </div>

      <div className="box">

        <div className="content">

          <div className="btn"><button onClick={getRandomQuote}>
            New Quote
          </button></div>


          <div className="quote">
            <div className="text"><h2>{quote.text}</h2></div>
            <div className="author"><h3>{quote.author}</h3></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;