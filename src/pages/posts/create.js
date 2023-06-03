import React, { useState } from "react";
import Head from "next/head";
import Router from 'next/router';
import Layout from "../../components/Layout";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    if (title && content) {
      // send a request to the server.
      try {
        const body = { title, content, published: false };
        await fetch(`/api/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await Router.push("/drafts");
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
        <title>Create Post</title>
      </Head>
      <div className=" mt-7">
        <form onSubmit={handleSubmit}>
          {error ? <div className=" error form-group">{error}</div> : null}
          {message ? <div className="message form-group">{message}</div> : null}
          <div className="form-group">
            <label className=" text-xl mr-2">Title</label>
            <input
              type="text"
              name="title"
              placeholder=""
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className=" outline-none border-2 p-1 border-black"
            />
          </div>
          <div className="form-group">
            <textarea
              cols={50}
              name="content"
              placeholder="Content"
              rows={8}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className=" outline-none border-2 p-1 border-black mt-5"
            />
          </div>
          <div className="form-group">
            <button type="submit" className="text-white border-2 py-2 px-6 bg-emerald-950 border-emerald-950 ">Add Post</button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
