import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

//eslint-disable-next-line
export const inputTextFocusAnimation = css`
  & {
    font-size: ${({ theme }) => theme.font.getSize(13)};
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 1px solid ${({ theme }) => theme.color.gray300};
    border-radius: 2px;
    margin-right: 8px;
    height: 20px;
  }

  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primary200};
    box-shadow: 1px 1px 2px 2px rgba(219, 77, 110, 0.3);
    outline: none;
  }
`;

//eslint-disable-next-line
export const buttonHoverAnimation = css`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    background-color: ${({ theme }) => theme.color.primary100};
    border-radius: 4px;
    color: ${({ theme }) => theme.color.white100};
    font-size: ${({ theme }) => theme.font.getSize(12)};
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 1px solid rgba(0, 0, 0, 0);
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0);
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.white100};
    color: ${({ theme }) => theme.color.primary100};
    border: 1px solid ${({ theme }) => theme.color.primary200};
    box-shadow: 1px 1px 2px 2px rgba(219, 77, 110, 0.3);
    outline: none;
  }
`;

const fontFaces = css`
  @font-face {
    font-family: "SpoqaHanSans";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Regular.woff")
      format("woff");
  }

  @font-face {
    font-family: "SpoqaHanSansB";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Bold.woff")
      format("woff");
  }

  @font-face {
    font-family: "SpoqaHanSansT";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Thin.woff")
      format("woff");
  }

  @font-face {
    font-family: "SpoqaHanSansM";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Medium.woff")
      format("woff");
  }

  @font-face {
    font-family: "SpoqaHanSansL";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SpoqaHanSansNeo-Light.woff")
      format("woff");
  }
`;

export const GlobalStyle = createGlobalStyle`
    ${reset}
    ${fontFaces}
    
    html {
      font-family :  'SpoqaHanSansNeo', 'sans-serif';
      font-size: ${({ theme }) => theme.font.getSize(14)};
    }

`;
