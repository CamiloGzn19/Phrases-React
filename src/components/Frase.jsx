import React from "react";

const Frase = ({ frase }) => {
  return (
    <div>
      <h1>{frase.quote}</h1>
      <h1>{frase.author}</h1>
    </div>
  );
};

export default Frase;
