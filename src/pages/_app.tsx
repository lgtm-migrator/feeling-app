import { AppProps } from "next/app"
import { getDisplayName } from "next/dist/next-server/lib/utils"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
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
