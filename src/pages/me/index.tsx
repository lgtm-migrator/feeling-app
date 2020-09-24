import Head from "next/head"

import TopBar from "../../components/TopBar"

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
          icon: (
            <img
              src={require("../../assets/icons/settings.svg")}
              alt="Settings"
            />
          ),
          href: "/settings",
          label: "Settings",
        }}
      />
    </>
  )
}
