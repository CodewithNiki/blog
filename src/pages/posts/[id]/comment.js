import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../../../components/Layout";

export const getServerSideProps = async ({ params }) => {
  return {
    props: {
      id: params?.id,
    },
  };
};

export default function Comment(props) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (comment) {
      // send request to server.
      try {
        const body = { comment, postId: props.id, published: false };
        let res = await fetch(`/api/post/comment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await router.push("/");
      } catch (error) {
        console.error(error);
      }
    } else {
      setError("All fields are required");
      return;
    }
  };

  return (
    <Layout>
      <Head>
        <title>Create Comment</title>
      </Head>
      <div className=" mt-7">
        <form onSubmit={handleSubmit}>
          {error ? <div className=" error form-group">{error}</div> : null}
          {message ? <div className="message form-group">{message}</div> : null}
          <div>
            <label>Comment</label>
            <input
              type="text"
              name="comment"
              placeholder="Leave a comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className=" outline-none border-2 p-1 border-black block"
            />
          </div>
          <div>
            <button type="submit" className="text-white border-2 py-2 px-6 bg-emerald-950 border-emerald-950 mt-2">Submit</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
