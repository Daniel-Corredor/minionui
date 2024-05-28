import { DefaultTheme } from "styled-components";
import { Color } from "./colors/property";
import { Padding } from "./padding/padding";

export interface Theme extends DefaultTheme {
  color: Color;
  padding: Padding;
}
