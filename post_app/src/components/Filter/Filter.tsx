import React, { useState, useEffect, memo } from "react";
import InputText from "../../shared/ui/InputText/InputText";
import { client } from "../../typings";
import { SearchIcon } from "../../shared/assets";
import styles from "./Filter.module.scss";
import { PROP_MESSAGE } from "../../const";
import withLogging from "../HOC/withLogging";

interface Props {
  filteredPostList: client.Post[];
  postList: client.Post[];
  setFilteredPostList: React.Dispatch<React.SetStateAction<client.Post[]>>;
}

const Filter: React.FC<Props> = ({
  filteredPostList,
  setFilteredPostList,
  postList,
}) => {
  const [filterInputValue, setFilterInputValue] = useState<string>("");

  console.log("filteredPostList", filteredPostList);
  console.log("postList", postList);
  console.log("setFilteredPostList", setFilteredPostList);

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
    <div className={styles.container}>
      <InputText
        value={filterInputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterInputValue(e.target.value)
        }
      />
      <SearchIcon className={styles.inputIcon} />
    </div>
  );
};

export default memo(withLogging(Filter, "Filter", PROP_MESSAGE));
