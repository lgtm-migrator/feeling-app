import Head from "next/head"

import TopBar from "../../components/TopBar"

export default function Insights(): JSX.Element {
  return (
    <>
      <Head>
        <title>Insights / Feeling</title>
        <meta
          name="description"
          content="Get insights into your mood trends"
        ></meta>
      </Head>

      <TopBar title="Insights" />
    </>
  )
}
