import { useState } from "react";
import VoteList from "./components/VoteList";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>Contador de Votos</h1>
      <VoteList />
    </div>
  );
}
