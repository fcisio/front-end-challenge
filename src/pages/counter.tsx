import { useState } from "react";
import { css } from "@emotion/react";

const CounterPage = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value: number) => {
    // setCount();
  };

  return (
    <main>
      <h1>Counter</h1>
      <h2>Create a counter that has a min. 0 and max. 3</h2>
      <blockquote>
        <p>
          Then explain how you would go about storing and logging the total
          clicks amount.
        </p>
      </blockquote>
      <section
        className="Section--grid"
        css={css`
          color: black;
        `}
      >
        <div css={{ padding: "1rem" }}>
          <h1>{count}</h1>
          <button onClick={() => handleCount(+1)}>+</button>
          <button onClick={() => handleCount(-1)}>-</button>
        </div>
      </section>
    </main>
  );
};

export default CounterPage;
