import { GetServerSideProps } from "next";
import axios from "axios";

interface DataProps {
  post: {
    body: string;
    title: string;
    id: number;
    userId: number;
  };
  comments: {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  }[];
}

const DataPage = ({ post, comments }: DataProps) => {
  return (
    <main>
      <h1>Data fetching</h1>
      <h2>Fetch data server side</h2>
      <ol css={{ marginBottom: "6rem" }}>
        <li>Use the query param. `id` to fetch the right post.</li>
        <li>
          Get the comments and pass them to the props `/posts/1/comments`.
        </li>
        <li>Handle fetch errors</li>
      </ol>

      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

      {comments.map((comment) => (
        <div key={comment.id}>
          <h4>{comment.name}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </main>
  );
};

const ENDPOINT = "https://jsonplaceholder.typicode.com";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // 1. Use the query param. `id` to fetch the right post.
  // 2. Get the comments and pass them to the props `/posts/1/comments`.
  // 3. Handle fetch errors

  const post = await axios.get(ENDPOINT + "/posts/1");

  return { props: { post: post.data, comments: [] } };
};

export default DataPage;
