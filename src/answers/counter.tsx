import { useState, useRef } from "react";
import { css } from "@emotion/react";

const CounterPage = () => {
  const clicks = useRef(0);
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => {
    setCount((prev) => {
      const newValue = prev + value;
      return newValue < 0 ? 0 : newValue > 3 ? 3 : newValue;
    });

    clicks.current = clicks.current + 1;
    console.log("clicks", clicks.current);
  };

  return (
    <main>
      <h1>Counter</h1>
      <h2>Create a counter that has a min. 0 and max. 3</h2>
      <blockquote>
        <p>
          1. There should also be a counter on the amount of clicks. It&apos;s
          value will be logged `console.log()` when either of the buttons are
          clicked.
          <br />
          {'For example, clicking on "+", "-", "+" should log: 3'}
        </p>
        <p>2. You want to minimize the rerenders</p>
      </blockquote>
      <section
        className="Section--grid"
        css={css`
          color: black;
        `}
      >
        <div className="M__01">
          <h1>{count}</h1>
          <button onClick={() => handleCount(+1)}>+</button>
          <button onClick={() => handleCount(-1)}>-</button>
        </div>
      </section>
    </main>
  );
};

export default CounterPage;
