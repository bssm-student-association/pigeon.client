import { theme } from "../styles";

export const getColor = (postType: string) => {
  switch (postType) {
    case "SUGGESTION":
      return theme.blue.basic;
    case "PROJECT":
      return theme.green.basic;
    case "MENTORING":
      return theme.yellow.basic;
    default:
      return theme.gray[900];
  }
};
