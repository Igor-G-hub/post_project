import React, { useEffect, ComponentType } from "react";

const withLogging = <P extends object>(
  WrappedComponent: React.FC<P>,
  componentName: string,
  message: string
) => {
  const NewComponent = (props: P) => {
    useEffect(() => {
      message && console.log(`${message} ${componentName}`);
    }, []);
    return <WrappedComponent {...props} />;
  };
  return NewComponent;
};

export default withLogging;
