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

      <h2>Apply the text color the the elements background</h2>
      <blockquote>
        <p>You can only define the color once.</p>
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
