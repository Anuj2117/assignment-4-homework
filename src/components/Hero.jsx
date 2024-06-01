import React, { useState, useEffect } from "react";
import "../App.css";

function Hero() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://api.quotable.io/quotes?limit=20")
      .then((response) => response.json())
      .then((data) => setQuotes(data.results));
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="card">
          <h1 style={{textAlign:"center", margin:"10px"}}>Quotes</h1>
          {quotes.map((quote) => (
            <div key={quote._id} className="quote">
              <h1>"{quote.content}"</h1>
              <div>- {quote.author}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Hero;
