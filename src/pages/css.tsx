import { css } from "@emotion/react";

const CssPage = () => {
  return (
    <main>
      <h1>CSS</h1>

      <h2>Center (X & Y) with 2 different methods</h2>
      <section
        className="Section--grid"
        css={css`
          .M__01 {
          }
          .M__02 {
          }
        `}
      >
        <div className="M__01">
          <aside>01</aside>
        </div>
        <div className="M__02">
          <aside>02</aside>
        </div>
      </section>

      <h2>Apply a color on the small boxes background</h2>
      <blockquote>
        <p>You can only define the color once on the container.</p>
      </blockquote>
      <section
        className="Section--grid -centered"
        css={css`
          /* color is #ffc0cb */

          .M__01 {
          }
          .M__02 {
          }
        `}
      >
        <div className="M__01">
          <aside>01</aside>
        </div>
        <div className="M__02">
          <aside>02</aside>
        </div>
      </section>

      <h2>Add gaps of 2rem between the elements</h2>
      <blockquote>
        <p>1. You cannot use flex/grid gap propertie</p>
        <p>
          2. You cannot use nth-child/first-child/last-child/nth-of-type/...
        </p>
        <p>
          3. There should only be spacing between the elements; not at the start
          or end.
        </p>
      </blockquote>
      <section className="Section--full" css={css``}>
        <div className="M">
          <aside>01</aside>
          <aside>02</aside>
          <aside>03</aside>
          <aside>04</aside>
        </div>
      </section>

      <h2>Use CSS Custom Properties to set a color & background-color</h2>
      <blockquote>
        <p>1. Invert the color theme on hover of the container.</p>
        <p>
          2. You can only use CSS, you cannot touch the HTML (class, id, ...)
        </p>
      </blockquote>
      <section
        className="Section--grid -centered"
        css={css`
          /* blue & pink */
        `}
      >
        <div>
          <div>01</div>
        </div>
      </section>
    </main>
  );
};

export default CssPage;
