import React from "react";
import { Button } from "./components/Button";
import { Template } from "./Pages/Template";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  React.useEffect(() => {
    console.log("count foi chamado");
  }, [count]);

  return (
    <Template>
      <Button
        click={increment}
        title="Incrementar"
        styled={
          "bg-purple-500 hover:outline-offset-2 hover:outline-purple-500  active:bg-purple-600"
        }
      />
      <h1 className="text-6xl m-4">Contagem: {count}</h1>
      <Button
        click={decrement}
        title="Decrementar"
        styled={
          "bg-purple-500 hover:outline-offset-2  hover:outline-purple-500 active:bg-purple-600"
        }
      />
    </Template>
  );
}
