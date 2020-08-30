import Head from "next/head"
import { styled } from "linaria/react"

import TopBar from "../../components/TopBar"
import SettingsIcon from "../../assets/icons/settings.svg"

const Container = styled.div``

export default function Me(): JSX.Element {
  return (
    <>
      <Head>
        <title>Me</title>
      </Head>

      <Container>
        <TopBar
          title="Hey Michael,"
          subtitle="How are you feeling today?"
          icon={{
            icon: <SettingsIcon />,
            href: "/settings",
          }}
        />
      </Container>
    </>
  )
}
