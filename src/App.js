import React from "react";
import { Kanye } from "./components";
import { About } from "./components";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        <Route path="/" element={ <Kanye picSize="450" /> }/>
        <Route path="/:firstname/:lastname" element={ <Kanye picSize="450" /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export { App };
