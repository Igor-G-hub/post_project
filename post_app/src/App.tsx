import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PostList from "./pages/PostList/PostList";
import PostDetails from "./pages/PostDetails/PostDetails";
import { ROUTES } from "./routes";
import { PostProvider } from "./components/PostProvider/PostProvider";
import { PROP_MESSAGE } from "./const";
import styles from "./App.module.scss";

export const App = () => {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.appContainer}>
        <PostProvider propsMessage={PROP_MESSAGE}>
          <Router>
            <Routes>
              <Route path={ROUTES.posts} element={<PostList />} />
              <Route path={ROUTES.post} element={<PostDetails />} />
              <Route path="/" element={<Navigate to={ROUTES.posts} />} />
            </Routes>
          </Router>
        </PostProvider>
      </div>
    </>
  );
};
