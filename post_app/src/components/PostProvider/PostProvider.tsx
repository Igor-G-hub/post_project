import React, { createContext, useState, useEffect } from "react";
import { client } from "../../typings";

interface PostContextProps {
  postList: client.Post[];
  filteredPostList: client.Post[];
  setPostList: React.Dispatch<React.SetStateAction<client.Post[]>>;
  setFilteredPostList: React.Dispatch<React.SetStateAction<client.Post[]>>;
}

const PostContext = createContext<PostContextProps>({
  postList: [],
  filteredPostList: [],
  setPostList: () => {},
  setFilteredPostList: () => {},
});

interface PostProviderProps {
  children: React.ReactNode;
  propsMessage?: string;
}

interface ChildrenProps {
  children: React.ReactNode;
  string: string;
}

const Children: React.FC<ChildrenProps> = ({ children, string }) => {
  return <>{children}</>;
};

const PostProvider: React.FC<PostProviderProps> = ({
  children,
  propsMessage,
}) => {
  const [postList, setPostList] = useState<client.Post[]>([]);
  const [filteredPostList, setFilteredPostList] = useState<client.Post[]>([]);

  useEffect(() => {
    propsMessage && console.log(`${propsMessage} ${PostProvider.displayName}`);
  }, []);

  return (
    <PostContext.Provider
      value={{ postList, filteredPostList, setPostList, setFilteredPostList }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.displayName = "PostProvider";

export { PostContext, PostProvider };
