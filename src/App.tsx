import { Button } from "./components/Button";
import { Header } from "./components/Header";
import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Header />
      <Button click={increment} title="Incrementar" styled={'bg-purple-500 hover:outline-offset-2 active:bg-purple-600'}/>
      <Button click={decrement} title="Decrementar" styled={'bg-purple-500 hover:outline-offset-2 active:bg-purple-600'}/>
    </>
  );
}
