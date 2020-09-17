import Head from "next/head"
import { styled } from "linaria/react"

import TopBar from "../../components/TopBar"
import Calendar from "../../components/Calendar"
import SettingsIcon from "../../assets/icons/settings.svg"

const Container = styled.div`
  padding: var(--space-xxs) var(--space-xxs) 0;
  flex: 1;
`

export default function Me(): JSX.Element {
  return (
    <>
      <Head>
        <title>Me / Feeling</title>
      </Head>
      <TopBar
        title="Hey Michael,"
        subtitle="How are you feeling today?"
        rightIcon={{
          icon: <SettingsIcon />,
          href: "/settings",
        }}
      />
      <Container>
        <Calendar />
      </Container>
    </>
  )
}
