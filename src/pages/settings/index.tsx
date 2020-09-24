import Head from "next/head"
import Router from "next/router"
import { styled } from "linaria/react"

import TopBar from "../../components/TopBar"
import Setting from "../../components/Setting"

const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: var(--space-s);

  margin: var(--space-s) var(--space-m) 0;

  @media (min-width: 1200px) {
    max-width: 800px;
  }
`

const Separator = styled.hr`
  background-color: var(--light-grey-color);
  height: 1px;
  /* background-color: #ccc; */
  border: none;
`

export default function Settings(): JSX.Element {
  return (
    <>
      <Head>
        <title>Settings / Feeling</title>
      </Head>

      <TopBar title="Settings" backButton={true} />

      <Main>
        <Setting
          title="Reminders"
          subtitle="Be reminded everyday to log how you're feeling throughout the day"
          href="/settings/reminders"
        />
        <Setting
          title="Smart Analytics"
          subtitle="Probabo, inquit, modo dixi, constituto, ut alterum esse admonere interesse enim ad id."
          href="/settings/analytics"
        />
        <Separator />
        <Setting title="Terms and Conditions" href="" />
        <Setting title="Privacy Policy" href="" />
        <Separator />
        <Setting title="Version" subtitle="1.0" />
        <Setting
          title="Sign Out"
          subtitle="You are signed in as Michael Lee"
          href="/signout"
        />
      </Main>
    </>
  )
}
