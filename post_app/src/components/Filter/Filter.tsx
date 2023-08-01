import React, { useState, useEffect } from "react";
import InputText from "../../shared/ui/InputText/InputText";
import { client } from "../../typings";

interface Props {
  filteredPostList: client.Post[];
  postList: client.Post[];
  setFilteredPostList: React.Dispatch<React.SetStateAction<client.Post[]>>;
  propsMessage?: string;
}

const Filter: React.FC<Props> = ({
  filteredPostList,
  setFilteredPostList,
  postList,
  propsMessage,
}) => {
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  useEffect(() => {
    propsMessage && console.log(`${propsMessage} ${Filter.displayName}`);
  }, []);

  useEffect(() => {
    if (filterInputValue.length) {
      const newFilteredPostList = filteredPostList.filter((post) =>
        post.username.toLowerCase().startsWith(filterInputValue.toLowerCase())
      );
      setFilteredPostList(newFilteredPostList);
    } else {
      setFilteredPostList(postList);
    }
  }, [filterInputValue, postList]);

  return (
    <div>
      <InputText
        placeholder="search"
        value={filterInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterInputValue(e.target.value)
        }
        propsMessage={propsMessage}
      />
    </div>
  );
};

Filter.displayName = "Filter";

export default Filter;
