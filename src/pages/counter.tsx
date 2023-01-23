import { css } from "@emotion/react";

const CounterPage = () => {
  return (
    <main>
      <h1>Counter</h1>
      <h2>Create a counter that has a min. 0 and max. 3</h2>
      <blockquote>
        <p>You want to minimize the rerenders</p>
      </blockquote>
      <section
        className="Section--grid -centered"
        css={css`
          color: black;
        `}
      >
        <div css={{ padding: "1rem" }}>
          <h1>0</h1>
          <button>+ 1</button>
          <button>- 1</button>
        </div>
      </section>
    </main>
  );
};

export default CounterPage;
