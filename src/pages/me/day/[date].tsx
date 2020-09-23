import Head from "next/head"
import format from "date-fns/format"
import parse from "date-fns/parse"
import { styled } from "linaria/react"
import { useRouter } from "next/router"

import TopBar from "../../../components/TopBar"

const Container = styled.div`
  padding: var(--space-xxs) var(--space-xxs) 0;
  flex: 1;
`

export default function Day(): JSX.Element {
  const router = useRouter()
  const queryDate = router.query.date as string

  if (!queryDate) {
    router.push("/me")
  }

  const date = parse(queryDate, "dd-MM-yyyy", new Date())
  const formattedDate = format(date, "do MMMM yyyy")

  return (
    <>
      <Head>
        <title>{formattedDate} / Feeling</title>
      </Head>
      <TopBar backButton={true} title={formattedDate} />
      <Container></Container>
    </>
  )
}
