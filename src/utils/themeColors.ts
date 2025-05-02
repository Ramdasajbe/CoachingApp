// src/themes.ts
export type AppTheme = {
    background: string,
    card: string,
    primary: string,
    secondary: string,
    text: string,
    textSecondary: string,
    accent: string,
    error: string,
  };
  
  export const lightTheme: AppTheme = {
    background: "#FFFFFF",
    card: "#F9F9F9",
    primary: "#5F2DED",
    secondary: "#EEE8FD",
    text: "#1E1E1E",
    textSecondary: "#9E9E9E",
    accent: "#FFB800",
    error: "#FF4C4C",
  };
  
  export const darkTheme: AppTheme = {
    background: "#121212",
    card: "#1F1F1F",
    primary: "#5F2DED",
    secondary: "#4023B1",
    text: "#FFFFFF",
    textSecondary: "#BBBBBB",
    accent: "#FFB800",
    error: "#FF4C4C",
  };


  
  
  