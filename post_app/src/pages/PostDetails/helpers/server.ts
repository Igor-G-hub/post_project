import { getAllUsers, getCommentsByPostId, getPostById } from "../../../apis/postApis";
import { server } from "../../../typings";

export const fetchData = async (id: string) => {
      const post = await getPostById(id);
      const comments = post ? await getCommentsByPostId(post.id) : [];
      const users = post ? await getAllUsers() : [];
      const user = users.find((user: server.User) => user.id ===  post.userId)
      return {post, user, comments}
  };