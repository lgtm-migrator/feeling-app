/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg" {
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<
    SVGElement
  >>
  const content: string
  export default content
}
