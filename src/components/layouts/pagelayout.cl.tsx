import React from "react";

type pageLayoutProps = {
  children: React.ReactNode;
};

const PageLayout = (props: pageLayoutProps) => {
  return <>{props.children}</>;
};
export default PageLayout;
