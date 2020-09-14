import { AppProps } from "next/app"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Main = styled.main`
  --tab-bar-height: calc(12.4rem + var(--space-m));

  min-height: calc(100vh - var(--tab-bar-height));
  margin-bottom: var(--tab-bar-height);
  display: flex;
  flex-direction: column;
`

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
      <TabBar />
    </>
  )
}

export default MyApp
