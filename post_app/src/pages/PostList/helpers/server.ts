import { getAllComments, getAllPosts, getAllUsers } from "../../../apis/postApis";

export const fetchData = async () => {
    const [posts, comments, users] = await Promise.all([
      getAllPosts(),
      getAllComments(),
      getAllUsers(),
    ]);
    return { posts, comments, users };
  };