import "styled-components";
import { AseTheme } from "@/libs/theme";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends AseTheme {}
}
// Path: tsconfig.json
