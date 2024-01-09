import { theme } from "../styles";

export const getPostType = (postType: string) => {
  switch (postType) {
    case "SUGGESTION":
      return "건의사항";
    case "PROJECT":
      return "교내 프로젝트 수요";
    case "MENTORING":
      return "코드리뷰/멘토링";
    default:
      return theme.gray[900];
  }
};
