import React, { useEffect, useState } from "react";

function Kanye({ picSize }) {
  const [quote, setQuote] = useState("");
  const URL = `https://picsum.photos/${picSize}`;

  useEffect(() => {
    fetchQuote();
  }, []);

  async function fetchQuote() {
    try {
      const res = await fetch("https://api.kanye.rest");
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      console.error(`There was an error ${error} fetching quote`);
    }
  }

  return (
    <div className="container p-5 d-flex flex-column align-items-center">
      <h4 className="mx-auto">{quote}</h4>
      <img src={URL} />
    </div>
  );
}

export { Kanye };
