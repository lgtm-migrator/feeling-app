import Head from "next/head"

import TopBar from "../../components/TopBar"

export default function Settings(): JSX.Element {
  return (
    <>
      <Head>
        <title>Settings / Feeling</title>
        <meta
          name="description"
          content="Configure your preferences for the Feeling app"
        ></meta>
      </Head>

      <TopBar title="Settings" backButton={true} />
    </>
  )
}
