import React from "react";
import "./styles.scss";
import { ITypography } from "./types";

const Typography: React.FC<ITypography> = ({ children }) => {
  console.log(children);

  switch (children.type) {
    case "h1": {
      return <div className="h1">{children}</div>;
    }
    case "p": {
      return <div className="p">{children}</div>;
    }
  }
  return <div>Typography</div>;
};

export default Typography;
