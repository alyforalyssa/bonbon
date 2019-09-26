import * as styledComponents from "styled-components";
import ThemeInterface from "./theme";

// @ts-ignore
const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

// @ts-ignore
export { css, createGlobalStyle, keyframes, ThemeProvider, Keyframes, StyledComponent };
// @ts-ignore
export default styled;
