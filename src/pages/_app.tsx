import { AppProps } from "next/app"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Main = styled.main`
  /* Account for page  */
  margin-bottom: calc(12.4rem + var(--space-m));
`

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      <TabBar />
    </>
  )
}
