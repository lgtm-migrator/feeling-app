import Head from "next/head"

import TopBar from "../../components/TopBar"

export default function Settings(): JSX.Element {
  return (
    <>
      <Head>
        <title>Settings / Feeling</title>
      </Head>

      <TopBar title="Settings" backButton={true} />
    </>
  )
}
