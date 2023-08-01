import { client, server } from "../../../typings";

export const createPostObject = (
    posts: server.Post[],
    comments: server.Comment[],
    users: server.User[]
  ) => {
    return posts.reduce((prevPost: client.Post[], currPost: server.Post) => {
      const user = users.find(
        (user: server.User) => user.id === currPost.userId
      );
      const associatedCommets = comments.filter(
        (comment: server.Comment) => comment.postId === currPost.id
      );

      prevPost.push({
        ...currPost,
        username: user ? user.username : "",
        comments: associatedCommets,
      });
      return prevPost;
    }, []);
  };