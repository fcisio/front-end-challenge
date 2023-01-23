import type { AppProps } from "next/app";
import { Global, css } from "@emotion/react";

import "normalize.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global
        styles={css`
          body {
            background-color: #dedede;
            font-family: helvetica, arial, sans-serif;
          }
          main {
            padding: 30px;
            min-height: 100vh;
          }

          .Section--grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            margin-bottom: 6rem;
            color: white;

            > div {
              aspect-ratio: 16/9;
              background-color: white;

              > aside,
              > div {
                background-color: black;

                width: fit-content;
                padding: 1em;
              }
            }

            &.-centered > div {
              position: relative;
              > aside,
              > div {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%);
              }
            }
          }
        `}
      />
      <Component {...pageProps} />
    </>
  );
}
