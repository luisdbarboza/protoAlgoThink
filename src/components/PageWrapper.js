import React from "react";

const styles = { 
  paddingTop: "64px", 
  width: '100%',
  height: '100vh'
};

const PageWrapper = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default PageWrapper;
