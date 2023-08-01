import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../../typings";
import { ROUTES } from "../../routes";

interface Props {
  data: client.Post;
  propsMessage?: string;
}

const Post: React.FC<Props> = ({ data, propsMessage }) => {
  useEffect(() => {
    propsMessage && console.log(`${propsMessage} ${Post.displayName}`);
  }, []);

  const path = `${ROUTES.post.replace(":id", String(data.id))}`;
  return (
    <div>
      <Link to={path}>
        <h2 onClick={() => null}>{data.title}</h2>
      </Link>
      <p>{data.body}</p>
      <h3>{data.username}</h3>
      <ul>
        {data.comments.map((comment) => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </div>
  );
};

Post.displayName = "Post";

export default memo(Post);
