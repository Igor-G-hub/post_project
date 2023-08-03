import React, { useEffect, useContext, memo } from "react";
import Post from "../../components/Post/Post";
import { fetchData } from "./helpers/server";
import { createPostObject } from "./helpers/utils";
import Filter from "../../components/Filter/Filter";
import { PostContext } from "../../components/PostProvider/PostProvider";
import { client } from "../../typings";
import withLogging from "../../components/HOC/withLogging";
import { PROP_MESSAGE } from "../../const";

interface Props {}

const PostList: React.FC<Props> = () => {
  const { postList, setPostList, filteredPostList, setFilteredPostList } =
    useContext(PostContext);

  useEffect(() => {
    processData();
  }, []);

  const processData = async () => {
    const { posts, comments, users } = await fetchData();
    setPostList(createPostObject(posts, comments, users));
  };

  return (
    <>
      <Filter
        filteredPostList={filteredPostList}
        setFilteredPostList={setFilteredPostList}
        postList={postList}
      />
      {filteredPostList.map((post) => (
        <Post key={post.id} data={post} />
      ))}
    </>
  );
};

export default memo(withLogging(PostList, "PostList", PROP_MESSAGE));
