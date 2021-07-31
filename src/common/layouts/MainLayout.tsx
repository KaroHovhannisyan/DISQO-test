import React from "react";

interface IProps {
  children: JSX.Element;
}

const MainLayout: React.FC<IProps> = ({ children }) => {
  return children;
};

export default MainLayout;
