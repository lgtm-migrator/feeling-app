import Head from "next/head"
import { useRouter } from "next/router"
import { styled } from "linaria/react"
import { format, parse } from "date-fns"

import TopBar from "../../../components/TopBar"
import { useEffect } from "react"

const Container = styled.div`
  padding: var(--space-xxs) var(--space-xxs) 0;
  flex: 1;
`

export default function Day(): JSX.Element {
  const router = useRouter()
  const queryDate = router.query.date as string

  // Redirect to /me if no date is provided
  useEffect(() => {
    if (!queryDate) {
      router.push("/me")
    }
  }, [])

  if (!queryDate) {
    return null
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
