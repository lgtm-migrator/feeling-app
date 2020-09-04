import { AppProps } from "next/app"
import { getDisplayName } from "next/dist/next-server/lib/utils"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Main = styled.main`
  /* Account for page  */
  margin-bottom: calc(12.4rem + var(--space-m));
`

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      {getDisplayName(Component) !== "Landing" ? (
        <Main>
          <Component {...pageProps} />
          <TabBar />
        </Main>
      ) : (
        <main>
          <Component {...pageProps} />
        </main>
      )}
    </>
  )
}

export default MyApp
