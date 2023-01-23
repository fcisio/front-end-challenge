import { css } from "@emotion/react";

const CounterPage = () => {
  const handleCount = () => {};

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
        <div css={{ padding: "1rem" }}>
          <h1>0</h1>
          <button onClick={() => handleCount()}>+</button>
          <button onClick={() => handleCount()}>-</button>
        </div>
      </section>
    </main>
  );
};

export default CounterPage;
