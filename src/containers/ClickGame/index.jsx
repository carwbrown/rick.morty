import React from "react";

const ClickGame = () => {
  const [timer, setTimer] = React.useState(10);
  const [count, setCount] = React.useState(0);
  const id = React.useRef(null);

  const clear = () => clearTimeout(id.current);

  React.useEffect(() => {
    id.current = setTimeout(function () {
      setTimer((t) => t - 1);
    }, 1000);

    return clear;
  });

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const handleClick = () => {
    setCount((c) => c + 1);
  };
  return (
    <div className="App">
      <div>Timer: {timer}</div>
      <div>Count: {count}</div>
      {timer !== 0 && <button onClick={handleClick}>Click</button>}
    </div>
  );
};

export default ClickGame;
