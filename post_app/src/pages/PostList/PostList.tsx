import React, { useEffect, useContext, memo } from "react";
import Post from "../../components/Post/Post";
import { fetchData } from "./helpers/server";
import { createPostObject } from "./helpers/utils";
import Filter from "../../components/Filter/Filter";
import { PostContext } from "../../components/PostProvider/PostProvider";
import { client } from "../../typings";

interface Props {
  propsMessage?: string;
}

const PostList: React.FC<Props> = ({ propsMessage }) => {
  const { postList, setPostList, filteredPostList, setFilteredPostList } =
    useContext(PostContext);

  useEffect(() => {
    processData();
    propsMessage && console.log(`${propsMessage} ${PostList.displayName}`);
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
        propsMessage={propsMessage}
      />
      {filteredPostList.map((post) => (
        <Post key={post.id} data={post} propsMessage={propsMessage} />
      ))}
    </>
  );
};

PostList.displayName = "PostList";

export default memo(PostList);
