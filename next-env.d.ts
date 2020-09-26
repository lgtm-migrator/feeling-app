/// <reference types="next" />
/// <reference types="next/types/global" />

declare module "*.svg?sprite" {
  export const ReactComponent: React.FunctionComponent<React.SVGAttributes<
    SVGElement
  >>
  export default ReactComponent
}

declare module "*&img" {
  const img: { src; srcSet }
  export = img
}
