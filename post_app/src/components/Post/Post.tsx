import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { client } from "../../typings";
import { ROUTES } from "../../routes";
import styles from "./Post.module.scss";
import { AccountIcon } from "../../shared/assets";
import UserImage from "../../shared/assets/images/michael-dam-mEZ3PoFGs_k-unsplash (1).jpg";
import withLogging from "../HOC/withLogging";
import { PROP_MESSAGE } from "../../const";

export interface PostProps {
  data: client.Post;
}

const Post: React.FC<PostProps> = ({ data }) => {
  const { title, username, body, comments } = data;
  const path = `${ROUTES.post.replace(":id", String(data.id))}`;

  return (
    <div className={styles.postContainer}>
      <div className={styles.user}>
        <img src={UserImage} />
        <h3>{username}</h3>
      </div>
      <Link to={path}>
        <h2>{title}</h2>
        <p>{body}</p>
      </Link>
      <div className={styles.commentsContainer}>
        <h3>Comments:</h3>
        {comments.map((comment) => (
          <div key={comment.id} className={styles.comments}>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <AccountIcon style={{ width: "40px" }} />
              <h5 className={styles.email}>{comment.email}</h5>
            </div>
            <h5>{comment.name}</h5>
            <p style={{ fontSize: "1rem" }}>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(withLogging(Post, "Post", PROP_MESSAGE));
