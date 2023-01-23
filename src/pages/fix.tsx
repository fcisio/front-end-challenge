/* eslint-disable no-use-before-define */
import { css } from "@emotion/react";

const FixPage = () => {
  const id = "32";
  const data = ["a", "b", "c", "d"];

  return (
    <main>
      <h1>Fix this code</h1>

      <h2>Whats an issue this might cause in production ?</h2>
      <section className="Section--grid -centered" css={css``}>
        <div className="M__01">
          <aside>{new Date().toLocaleDateString("en-CA", {})}</aside>
        </div>
      </section>

      <h2>
        Whats an issue this might cause with variable data; and how would you
        fix it ?
      </h2>
      <blockquote>
        <p>`id` is of type `string`</p>
      </blockquote>
      <section className="Section--grid -centered" css={css``}>
        <div className="M__01">{id && <aside>#{id}</aside>}</div>
      </section>

      <h2>The code is working, but how could it be optimized ?</h2>
      <section className="Section--grid -centered" css={css``}>
        <div className="M__01">
          <aside>{[["a"], "b", "c", "d"].join(", ")}</aside>
        </div>
      </section>

      <h2>Fix the sum value only using functions or operators.</h2>
      <section className="Section--grid -centered" css={css``}>
        <div className="M__01">
          <aside>{"3" + 6}</aside>
        </div>
      </section>

      <h2>Fix this condition. It should only render arrays.</h2>
      <section className="Section--grid -centered" css={css``}>
        <div className="M__01">
          {typeof data === "array" && <aside>{data.join(", ")}</aside>}
        </div>
      </section>
    </main>
  );
};

export default FixPage;
