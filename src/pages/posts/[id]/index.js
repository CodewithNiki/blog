import prisma from "../../../../lib/prisma";
import Layout from "../../../components/Layout";

export default function PostPage(props) {
  return (
    <Layout>
      <div>
        <h1>{props.title}</h1>
        <h5>{props.content}</h5>
        <h6>Comments</h6>
        <a href={`${props.id}/comment`}>Leave a comment</a>
        {props.comments.length > 0 ? (
          <ul>
            {props.comments.map((comment, index) => (
              <li key={index}>{comment.content}</li>
            ))}
          </ul>
        ) : (
          <p>No comments</p>
        )}
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
    const feed = await prisma.post.findMany({
        where: { published: true },
        include: {
          comments: {
                select: { content: true },
            },
        },
    });
    return {
        props: { feed },
        revalidate: 10,
    };
  }