import React, { FC } from "react";
import ThemeProvider from "./components/ThemeProvider";
import dynamic from "next/dynamic";

interface NestedProps {
  children?: any;
}

const ThemeProviderNoSSR = dynamic(() => import('./components/ThemeProvider'), { ssr: false })

const Nested: FC<NestedProps> = ({ children }) => {
  return (
    <>
      <ThemeProviderNoSSR>{children}</ThemeProviderNoSSR>
    </>
  );
};

export default Nested;
