import React from "react";

function Layout({ styles, children }) {
  return <div className={`w-[100vw] h-[100vh] flex ${styles}`}>{children}</div>;
}

export { Layout };
