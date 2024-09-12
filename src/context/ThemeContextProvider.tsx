import React, { createContext } from "react";
import { ThemeProvider } from "styled-components";

import theme from '../theme/'
import ThemeType from "../@types/ThemeType";

interface ThemeContextType {
  theme: ThemeType
}

interface ChildrenProps {
  children: React.ReactNode,
}

export const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

export function ThemeContextProvider({ children }: ChildrenProps) {

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}