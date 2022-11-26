import React, { useState } from "react";
import { questions } from "./api";
import Accordion from "./Accordion";
import "./index.css";

const App = () => {
  const [data, setData] = useState(questions);
  return (
    <>
      <section className="main_div">
        <h1>Questions</h1>
        {data.map((curElem) => {
          const { id } = curElem;
          return <Accordion key={id} {...curElem} />;
        })}
      </section>
    </>
  );
};

export default App;
