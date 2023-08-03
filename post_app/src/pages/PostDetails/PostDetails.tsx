import React, { useEffect, useContext, useState, memo } from "react";
import { PostContext } from "../../components/PostProvider/PostProvider";
import { useParams } from "react-router-dom";
import { client } from "../../typings";
import Post from "../../components/Post/Post";
import { PROP_MESSAGE } from "../../const";
import withLogging from "../../components/HOC/withLogging";
import { getPostById } from "../../apis/postApis";
import { fetchData } from "./helpers/server";

interface Props {}

const PostDetails: React.FC<Props> = () => {
  const { id } = useParams();
  const { postList } = useContext(PostContext);
  const [postData, setPostData] = useState<client.Post>();

  console.log("postData", postData);
  useEffect(() => {
    if (postList.length) {
      const post = postList.find((post: client.Post) => post.id === Number(id));
      post && setPostData(post);
    } else {
      processData();
    }
  }, [postList]);

  const processData = async () => {
    if (id) {
      const { post, user, comments } = await fetchData(id);
      setPostData({
        ...post,
        username: user.username,
        comments,
      });
    }
  };

  console.log("postData", postData);

  return postData ? <Post data={postData} /> : null;
};

export default memo(withLogging(PostDetails, "PostDetails", PROP_MESSAGE));
