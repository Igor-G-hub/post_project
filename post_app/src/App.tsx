import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./pages/PostList/PostList";
import PostDetails from "./pages/PostDetails/PostDetails";
import { ROUTES } from "./routes";
import { PostProvider } from "./components/PostProvider/PostProvider";

export const App = () => {
  const [propsMessage] = useState<string>("Hello from");

  return (
    <div className="App">
      <PostProvider propsMessage={propsMessage}>
        <Router>
          <Routes>
            <Route
              path={ROUTES.posts}
              element={<PostList propsMessage={propsMessage} />}
            />
            <Route
              path={ROUTES.post}
              element={<PostDetails propsMessage={propsMessage} />}
            />
          </Routes>
        </Router>
      </PostProvider>
    </div>
  );
};
