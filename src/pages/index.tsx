import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ol css={{ listStyle: "revert" }}>
          <li>
            <Link href="/css">CSS</Link>
          </li>
          <li>
            <Link href="/fix">Fix this code</Link>
          </li>
          <li>
            <Link href="/counter">Counter</Link>
          </li>
          <li>
            <Link href="/data?id=4">Data Fetching</Link>
          </li>
          <li>
            <Link href="/typescript">Typescript (bonus)</Link>
          </li>
          <li>
            <Link href="/questions">Questions</Link>
          </li>
        </ol>
      </main>
    </>
  );
}
