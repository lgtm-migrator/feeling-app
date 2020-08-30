import Head from "next/head"

import TopBar from "../../components/TopBar"
import SettingsIcon from "../../assets/icons/settings.svg"

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
    </>
  )
}
