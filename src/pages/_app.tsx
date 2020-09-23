import { AppProps } from "next/app"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Main = styled.main`
  min-height: 100vh;
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
