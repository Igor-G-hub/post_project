import React from "react";
import styles from "./Comment.module.scss";
import { server } from "../../typings";
import { AccountIcon } from "../../shared/assets";

interface Props {
  data: server.Comment;
}

const Comment: React.FC<Props> = ({ data }) => {
  return (
    <div key={data.id} className={styles.comments}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <AccountIcon style={{ width: "40px" }} />
        <h5 className={styles.email}>{data.email}</h5>
      </div>
      <h5>{data.name}</h5>
      <p style={{ fontSize: "1rem" }}>{data.body}</p>
    </div>
  );
};

export default Comment;
