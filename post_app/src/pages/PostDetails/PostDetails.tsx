import React, { useEffect } from "react";

interface Props {
  propsMessage?: string;
}

const PostDetails: React.FC<Props> = ({ propsMessage }) => {
  useEffect(() => {
    propsMessage && console.log(`${propsMessage} ${PostDetails.displayName}`);
  }, []);
  return <div>PostDetails</div>;
};

PostDetails.displayName = "PostDetails";

export default PostDetails;
