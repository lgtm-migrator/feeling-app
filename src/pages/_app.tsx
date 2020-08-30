import { AppProps } from "next/app"
import { styled } from "linaria/react"

import TabBar from "../components/TabBar"
import "../styles/global.css"

const Container = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1fr auto;
`

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Container>
      <Component {...pageProps} />
      <TabBar />
    </Container>
  )
}

export default MyApp
